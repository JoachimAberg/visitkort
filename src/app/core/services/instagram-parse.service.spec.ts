import { TestBed, inject } from '@angular/core/testing';

import { InstagramParseService } from './instagram-parse.service';

describe('InstagramParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramParseService]
    });
  });

  it('should be created', inject([InstagramParseService], (service: InstagramParseService) => {
    expect(service).toBeTruthy();
  }));
});
