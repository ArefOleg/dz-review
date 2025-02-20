export interface Article {
    id: number;
    title: string;
    content: string;
    date: Date;
    type: ArticleType;
  }
  
  export enum ArticleType {
    NEWS = 'news',
    REVIEW = 'review',
    GUIDE = 'guide'
  }