import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {ArticleService} from "./services/article.service";

interface Article {
  route: string;
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$ = new Subject<Article[]>();

  constructor(private readonly router: Router, private readonly articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.articles$.subscribe((res: any) => {
      this.articles$.next(res);
    });
  }

  navigateToArticle(article: Article): void {
    this.router.navigate([`blog/${article.route}`]);
  }
}
