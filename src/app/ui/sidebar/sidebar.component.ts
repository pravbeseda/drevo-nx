import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutService } from '../../core/services/layout.service';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavbarComponent } from '../navbar/navbar.component';

@UntilDestroy()
@Component({
  selector: 'drevo-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterLink,
    AsyncPipe,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  public readonly sidebarOpened$ = this.layoutService.sidebarOpened$;
  public mobileQuery: MediaQueryList | undefined;
  constructor(
    private readonly layoutService: LayoutService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.layoutService.mobileQuery$
      .pipe(untilDestroyed(this))
      .subscribe(mobileQuery => {
        this.mobileQuery = mobileQuery;
        this.cdRef.detectChanges();
      });
  }
}
