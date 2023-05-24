import { TestBed } from '@angular/core/testing';

import { ListadoFicherosService } from './listado-ficheros.service';

describe('ListadoFicherosService', () => {
  let service: ListadoFicherosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoFicherosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
