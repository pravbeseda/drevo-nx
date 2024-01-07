import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let spectator: Spectator<CalendarComponent>;
  const createComponent = createComponentFactory(CalendarComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
