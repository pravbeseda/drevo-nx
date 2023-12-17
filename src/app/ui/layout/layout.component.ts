import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutService } from '../../core/services/layout.service';

const MATERIAL_IMPORTS = [MatButtonModule];
@Component({
  selector: 'drevo-layout',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, NavbarComponent, SidebarComponent, AsyncPipe],
  providers: [ThemeService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly theme$ = this.themeService.currentTheme$;
  constructor(
    private readonly themeService: ThemeService,
    private readonly layoutService: LayoutService
  ) {}

  public toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }
}
