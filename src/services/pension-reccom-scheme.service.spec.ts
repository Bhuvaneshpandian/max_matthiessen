import { TestBed } from '@angular/core/testing';

import { PensionReccomSchemeService } from './pension-reccom-scheme.service';

describe('PensionReccomSchemeService', () => {
  let service: PensionReccomSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionReccomSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
