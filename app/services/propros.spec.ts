import { TestBed } from '@angular/core/testing';

import { Propros } from './propros';

describe('Propros', () => {
  let service: Propros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Propros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
