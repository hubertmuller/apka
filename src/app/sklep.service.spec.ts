import { TestBed } from '@angular/core/testing';

import { SklepService } from './sklep.service';

describe('SklepService', () => {
  let service: SklepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SklepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
