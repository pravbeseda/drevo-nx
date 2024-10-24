export interface ArticleContent {
    readonly title?: string;
    readonly anchor?: string;
    readonly subtitles?: ArticleContent[];
}
