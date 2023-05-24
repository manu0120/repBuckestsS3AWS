using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Util;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using S3BucketsApiAwsManuel.Models;

namespace S3.Demo.API.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/buckets")]
    [ApiController]
    public class BucketsContoller : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;
        public BucketsContoller(IAmazonS3 s3Client)
        {
            _s3Client = s3Client;
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateBucketAsync(string bucketName)
        {
            var bucketExists = await AmazonS3Util.DoesS3BucketExistV2Async(_s3Client, bucketName);

            if (bucketExists) return BadRequest($"Bucket {bucketName} already exists.");
            await _s3Client.PutBucketAsync(bucketName);
            return Ok($"Bucket {bucketName} created.");
        }

        [HttpGet("get-all")]
        public async Task<IActionResult> GetAllBucketAsync()
        {
            //var data = await _s3Client.ListBucketsAsync();
            //var buckets = data.Buckets.Select(b => { return b.BucketName; });

            var listadoBucketAmazon = await _s3Client.ListBucketsAsync();

            var listaBuckets = new List<Bucket>();

            foreach (var bucket in listadoBucketAmazon.Buckets)
            {
                var request = new ListObjectsRequest
                {
                    BucketName = bucket.BucketName
                };
                
                var objectsResponse = await _s3Client.ListObjectsAsync(request);
                var longitudArchivos = objectsResponse.S3Objects.Count;

                var bucketConDatos = new Bucket
                {
                    nombreBucket = bucket.BucketName,
                    fechaBucketCreacion = bucket.CreationDate,
                    archivos = longitudArchivos
                };

                listaBuckets.Add(bucketConDatos);
            }

            return Ok(listaBuckets);
        }
        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteBucketAsync(string bucketName)
        {
            await _s3Client.DeleteBucketAsync(bucketName);
            return NoContent();
        }
    }
}
