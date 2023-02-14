import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormPutComponent } from './artist-form-put.component';

describe('ArtistFormPutComponent', () => {
  let component: ArtistFormPutComponent;
  let fixture: ComponentFixture<ArtistFormPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistFormPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
