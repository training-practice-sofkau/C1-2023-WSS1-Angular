import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtistFormComponent } from './update-artist-form.component';

describe('UpdateArtistFormComponent', () => {
  let component: UpdateArtistFormComponent;
  let fixture: ComponentFixture<UpdateArtistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArtistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArtistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
