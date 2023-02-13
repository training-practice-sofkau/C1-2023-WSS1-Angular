import { TestBed } from '@angular/core/testing';

import { AlbumHttpService } from './album-http.service';

describe('AlbumHttpService', () => {
  let service: AlbumHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
