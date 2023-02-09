import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListMenuComponent } from './album-list-menu.component';

describe('AlbumListMenuComponent', () => {
  let component: AlbumListMenuComponent;
  let fixture: ComponentFixture<AlbumListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
