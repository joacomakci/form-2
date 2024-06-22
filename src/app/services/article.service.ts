import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  addArticle(article: Article): void {
    this.articles.push(article);
  }
}
