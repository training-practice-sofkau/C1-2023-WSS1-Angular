import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormPutComponent } from './album-form-put.component';

describe('AlbumFormPutComponent', () => {
  let component: AlbumFormPutComponent;
  let fixture: ComponentFixture<AlbumFormPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumFormPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
