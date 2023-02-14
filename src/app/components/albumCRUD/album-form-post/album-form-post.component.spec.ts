import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormPostComponent } from './album-form-post.component';

describe('AlbumFormPostComponent', () => {
  let component: AlbumFormPostComponent;
  let fixture: ComponentFixture<AlbumFormPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
