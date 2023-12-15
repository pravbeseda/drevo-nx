import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

const MATERIAL_IMPORTS = [MatButtonModule];
@Component({
  selector: 'drevo-layout',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, NavbarComponent, AsyncPipe],
  providers: [ThemeService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly theme$ = this.themeService.currentTheme$;
  constructor(private readonly themeService: ThemeService) {}
}
