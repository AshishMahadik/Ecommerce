import { TestBed } from '@angular/core/testing';

import { SettingService } from './setting.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SettingService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(SettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
