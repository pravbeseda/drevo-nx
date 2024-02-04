import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'drevo-article-content',
    standalone: true,
    imports: [NgIf, RouterLink],
    templateUrl: './article-content.component.html',
    styleUrl: './article-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
    @Input()
    public content: Content | undefined;
}
