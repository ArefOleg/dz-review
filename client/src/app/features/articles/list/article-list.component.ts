import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../shared/services/article.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}