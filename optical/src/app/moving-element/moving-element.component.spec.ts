import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingElementComponent } from './moving-element.component';

describe('MovingElementComponent', () => {
  let component: MovingElementComponent;
  let fixture: ComponentFixture<MovingElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingElementComponent]
    });
    fixture = TestBed.createComponent(MovingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
