import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMostrarUrlComponent } from './popup-mostrar-url.component';

describe('PopupMostrarUrlComponent', () => {
  let component: PopupMostrarUrlComponent;
  let fixture: ComponentFixture<PopupMostrarUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMostrarUrlComponent]
    });
    fixture = TestBed.createComponent(PopupMostrarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
