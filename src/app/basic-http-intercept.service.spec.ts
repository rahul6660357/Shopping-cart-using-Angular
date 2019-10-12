import { TestBed } from '@angular/core/testing';

import { BasicHttpInterceptService } from './basic-http-intercept.service';

describe('BasicHttpInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicHttpInterceptService = TestBed.get(BasicHttpInterceptService);
    expect(service).toBeTruthy();
  });
});
