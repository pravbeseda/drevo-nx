import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SidebarLeftContentComponent } from './sidebar-left-content.component';

describe('SidebarLeftContentComponent', () => {
  let spectator: Spectator<SidebarLeftContentComponent>;
  const createComponent = createComponentFactory(SidebarLeftContentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
