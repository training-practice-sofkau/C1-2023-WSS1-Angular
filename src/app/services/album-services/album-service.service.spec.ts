import { TestBed } from '@angular/core/testing';

import { AlbumServicesService } from './album-service.service';

describe('AlbumServicesService', () => {
  let service: AlbumServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
