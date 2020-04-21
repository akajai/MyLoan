import { TestBed } from '@angular/core/testing';

import { LaonService } from './laon.service';

describe('LaonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaonService = TestBed.get(LaonService);
    expect(service).toBeTruthy();
  });
});
