import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';

const MATERIAL_IMPORTS = [MatButtonModule];
@Component({
  selector: 'drevo-layout',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
