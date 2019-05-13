import { TestBed } from '@angular/core/testing';

import { TokenService } from './services/get-token.service';

describe('GetTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenService = TestBed.get(TokenService);
    expect(service).toBeTruthy();
  });
});
