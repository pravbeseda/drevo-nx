import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NavbarMenuContentComponent } from './navbar-menu-content.component';

describe('NavbarMenuContentComponent', () => {
  let spectator: Spectator<NavbarMenuContentComponent>;
  const createComponent = createComponentFactory(NavbarMenuContentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
