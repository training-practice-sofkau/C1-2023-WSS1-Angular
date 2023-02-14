import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlbumFormComponent } from './edit-album-form.component';

describe('EditAlbumFormComponent', () => {
  let component: EditAlbumFormComponent;
  let fixture: ComponentFixture<EditAlbumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlbumFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
