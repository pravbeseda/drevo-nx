import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Content } from '@shared/models/content';

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
    public content: Content | undefined;
}
