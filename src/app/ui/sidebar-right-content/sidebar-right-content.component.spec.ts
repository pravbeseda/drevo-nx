import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SidebarRightContentComponent } from './sidebar-right-content.component';

describe('SidebarRightContentComponent', () => {
  let spectator: Spectator<SidebarRightContentComponent>;
  const createComponent = createComponentFactory(SidebarRightContentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
