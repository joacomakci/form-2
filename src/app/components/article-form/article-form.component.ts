import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../interfaces/article.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css',
})
export class ArticleFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      content: [''],
    });
  }

  addArticle(): void {
    const newArticle: Article = {
      id: Date.now(),
      title: this.form.value.title,
      content: this.form.value.content,
    };
    this.articleService.addArticle(newArticle);
    this.form.reset();
  }
}
