import { TestBed } from '@angular/core/testing';

import { ArtistHttpService } from './artist-http.service';

describe('ArtistHttpService', () => {
  let service: ArtistHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
