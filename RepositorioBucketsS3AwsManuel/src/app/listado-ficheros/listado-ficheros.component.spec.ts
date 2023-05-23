import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFicherosComponent } from './listado-ficheros.component';

describe('ListadoFicherosComponent', () => {
  let component: ListadoFicherosComponent;
  let fixture: ComponentFixture<ListadoFicherosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoFicherosComponent]
    });
    fixture = TestBed.createComponent(ListadoFicherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
