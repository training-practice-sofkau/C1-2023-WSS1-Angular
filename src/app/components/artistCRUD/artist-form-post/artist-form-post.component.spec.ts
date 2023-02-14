import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormPostComponent } from './artist-form-post.component';

describe('ArtistFormPostComponent', () => {
  let component: ArtistFormPostComponent;
  let fixture: ComponentFixture<ArtistFormPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
