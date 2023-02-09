import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListMenuComponent } from './artist-list-menu.component';

describe('ArtistListMenuComponent', () => {
  let component: ArtistListMenuComponent;
  let fixture: ComponentFixture<ArtistListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistListMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
