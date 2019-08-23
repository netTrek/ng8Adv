import { TestBed } from '@angular/core/testing';

import { AppTokenInterceptorService } from './app-token-interceptor.service';

describe('AppTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTokenInterceptorService = TestBed.get(AppTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
