import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";

interface Article {
  route: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  activeArticle$ = new BehaviorSubject<Article>({route: '', title: '', text: ''});

  constructor(private readonly articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.articleService.getArticles();
    this.articleService.articles$.subscribe((articles: Article[]) => {
      const activeArticle = articles.find((article: Article) => article.route === this.activatedRoute.snapshot.params.articleRoute);
      if (activeArticle) {
        this.activeArticle$.next(activeArticle)
      }
    });

  }


}
