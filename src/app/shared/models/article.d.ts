import { Content } from './content';

export interface Article {
    id: number;
    version: number;
    title: string;
    body: string;
    content?: Content;
}
