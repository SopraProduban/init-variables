import { TestBed, inject } from '@angular/core/testing';

import { ServicioPruebaService } from './servicio-prueba.service';

describe('ServicioPruebaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPruebaService]
    });
  });

  it('should be created', inject([ServicioPruebaService], (service: ServicioPruebaService) => {
    expect(service).toBeTruthy();
  }));
});
