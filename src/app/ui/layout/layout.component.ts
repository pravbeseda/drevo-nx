import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../../core/services/user/user.service';
import { AsyncPipe } from '@angular/common';

const MATERIAL_IMPORTS = [MatButtonModule];
@Component({
  selector: 'drevo-layout',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, NavbarComponent, AsyncPipe],
  providers: [UserService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly theme$ = this.userService.userTheme$;
  constructor(private readonly userService: UserService) {}
}
