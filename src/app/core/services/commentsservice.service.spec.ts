import { TestBed } from '@angular/core/testing';

import { CommentsserviceService } from './commentsservice.service';

describe('CommentsserviceService', () => {
  let service: CommentsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
