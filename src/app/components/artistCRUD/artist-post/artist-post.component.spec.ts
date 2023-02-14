import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPostComponent } from './artist-post.component';

describe('ArtistPostComponent', () => {
  let component: ArtistPostComponent;
  let fixture: ComponentFixture<ArtistPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
