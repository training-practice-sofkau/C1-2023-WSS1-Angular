import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCardComponent } from './element-card.component';

describe('ElementCardComponent', () => {
  let component: ElementCardComponent;
  let fixture: ComponentFixture<ElementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
