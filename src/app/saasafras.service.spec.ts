import { TestBed, async, inject } from '@angular/core/testing';
import { SaasafrasService } from './services/saasafras.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('SaasafrasService', () => {
  let service: SaasafrasService;
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule],
          providers: [SaasafrasService]
      });
      service = TestBed.get(SaasafrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get solutions', async(() => {
    service.GetSolutions().subscribe({
      next: (s) => s.solutions.forEach(s1 => console.log(s1.appId)),
      error: (e) => console.error(e)
    });
  }));
});
