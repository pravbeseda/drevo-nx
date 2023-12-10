import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

@Component({
  selector: 'drevo-root',
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
