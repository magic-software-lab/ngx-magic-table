import { TestBed, inject } from '@angular/core/testing';

import { PrettifyWrapperService } from './prettify-wrapper.service';

describe('PrettifyWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrettifyWrapperService]
    });
  });

  it('should be created', inject([PrettifyWrapperService], (service: PrettifyWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
