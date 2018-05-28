import { TestBed, inject } from '@angular/core/testing';

import { Logger } from './logger.service';

describe('Logger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Logger]
    });
  });

  it('should be created', inject([Logger], (service: Logger) => {
    expect(service).toBeTruthy();
  }));
});
