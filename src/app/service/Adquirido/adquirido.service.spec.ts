import { TestBed } from '@angular/core/testing';

import { AdquiridoService } from './adquirido.service';

describe('AdquiridoService', () => {
  let service: AdquiridoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdquiridoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
