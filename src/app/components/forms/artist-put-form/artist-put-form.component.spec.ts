import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPutFormComponent } from './artist-put-form.component';

describe('ArtistPutFormComponent', () => {
  let component: ArtistPutFormComponent;
  let fixture: ComponentFixture<ArtistPutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistPutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
