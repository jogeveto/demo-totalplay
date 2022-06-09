/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TotalService } from './total.service';

describe('Service: Total', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalService]
    });
  });

  it('should ...', inject([TotalService], (service: TotalService) => {
    expect(service).toBeTruthy();
  }));
});
