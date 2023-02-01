import { TestBed } from '@angular/core/testing';

import { AlbumsserviceService } from './albumsservice.service';

describe('AlbumsserviceService', () => {
  let service: AlbumsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
