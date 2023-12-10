import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'drevo-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent {

}
