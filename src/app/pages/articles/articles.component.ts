import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'drevo-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent {

}
