import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNuevoBucketComponent } from './popup-nuevo-bucket.component';

describe('PopupNuevoBucketComponent', () => {
  let component: PopupNuevoBucketComponent;
  let fixture: ComponentFixture<PopupNuevoBucketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupNuevoBucketComponent]
    });
    fixture = TestBed.createComponent(PopupNuevoBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
