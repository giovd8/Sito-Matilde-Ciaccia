import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {share} from "rxjs/operators";
import {Router} from "@angular/router";
import {ArticleService} from "../../../../../core/services/article.service";

interface Article {
  route: string;
  title: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$ = new Subject<Article[]>();

  constructor(private readonly router: Router, private readonly articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.articles$.subscribe((res: any) => {
      this.articles$.next(res);
    });
  }

  navigateToArticle(article: Article): void {
    this.router.navigate([`article/${article.route}`]);
  }
}
