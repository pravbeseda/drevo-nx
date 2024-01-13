import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '../../article/article.component';

@Component({
    selector: 'drevo-home',
    standalone: true,
    imports: [ArticleComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public readonly homePageId = 1;
}
