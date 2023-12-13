import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { Theme, ThemeService } from '../../core/services/theme.service';
import { map } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';

const MATERIAL_IMPORTS = [MatButtonModule, MatIconModule, MatToolbarModule];

@Component({
  selector: 'drevo-navbar',
  standalone: true,
  imports: [
    ...MATERIAL_IMPORTS,
    RouterModule,
    ThemeSwitcherComponent,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public readonly theme$ = this.themeService.currentTheme$.pipe(
    map((theme) => (theme === Theme.light ? Theme.green : ''))
  );

  constructor(private readonly themeService: ThemeService) {}
}
