import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { LayoutComponent } from './layout.component';
import { ActivatedRoute } from '@angular/router';

describe('LayoutComponent', () => {
  let spectator: Spectator<LayoutComponent>;
  const createComponent = createComponentFactory({
    component: LayoutComponent,
    providers: [mockProvider(ActivatedRoute)],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
