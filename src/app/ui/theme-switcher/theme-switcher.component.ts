import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Theme, UserService } from '../../core/services/user/user.service';

interface ThemeItem {
  name: string;
  value: Theme;
}
@Component({
  selector: 'drevo-theme-switcher',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  public readonly themes: ThemeItem[] = [
    { name: 'Светлая тема', value: Theme.light },
    { name: 'Темная тема', value: Theme.dark },
    { name: 'Черная тема', value: Theme.black },
  ];

  constructor(private readonly userService: UserService) {}

  public setTheme(theme: ThemeItem): void {
    this.userService.setTheme(theme.value);
  }
}
