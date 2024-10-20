import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'drevo-article-content',
    standalone: true,
    imports: [NgIf],
    templateUrl: './article-content.component.html',
    styleUrl: './article-content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleContentComponent {
    @Input()
    public content: Content | undefined;

    @Output()
    public readonly scrollEvent = new EventEmitter<string>();
}
