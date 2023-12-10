import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { NavbarComponent } from './navbar.component';
import { ActivatedRoute } from '@angular/router';

describe('NavbarComponent', () => {
  let spectator: Spectator<NavbarComponent>;
  const createComponent = createComponentFactory({
    component: NavbarComponent,
    providers: [mockProvider(ActivatedRoute)],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
