import { TestBed } from '@angular/core/testing';

import { DeployService } from './services/deploy.service';

describe('DeployService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeployService = TestBed.get(DeployService);
    expect(service).toBeTruthy();
  });
});
