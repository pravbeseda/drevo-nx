import { ArticleContent } from './article-content';

export interface Article {
    id: number;
    version: number;
    title: string;
    body: string;
    content?: ArticleContent;
}
