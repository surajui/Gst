import { TestBed, async, inject } from '@angular/core/testing';

import { EntryGuard } from './entry.guard';

describe('EntryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryGuard]
    });
  });

  it('should ...', inject([EntryGuard], (guard: EntryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
