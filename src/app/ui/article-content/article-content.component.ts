import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleContent } from '@shared/models/article-content';

@Component({
    selector: 'drevo-article-content',
    standalone: true,
    imports: [NgIf, RouterLink, NgClass],
    templateUrl: './article-content.component.html',
    styleUrl: './article-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
    @Input()
    public content: ArticleContent | undefined;
}
