import { TestBed } from '@angular/core/testing';

import { TriggerAnimationService } from './trigger-animation.service';

describe('TriggerAnimationService', () => {
  let service: TriggerAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriggerAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
