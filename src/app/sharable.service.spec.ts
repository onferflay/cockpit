import { TestBed, inject } from '@angular/core/testing';

import { SharableService } from './sharable.service';

describe('SharableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharableService]
    });
  });

  it('should be created', inject([SharableService], (service: SharableService) => {
    expect(service).toBeTruthy();
  }));
});
