import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBucketsComponent } from './listado-buckets.component';

describe('ListadoBucketsComponent', () => {
  let component: ListadoBucketsComponent;
  let fixture: ComponentFixture<ListadoBucketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoBucketsComponent]
    });
    fixture = TestBed.createComponent(ListadoBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
