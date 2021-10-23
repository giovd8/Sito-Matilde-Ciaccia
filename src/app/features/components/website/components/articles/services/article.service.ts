import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {share} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

interface Article {
  route: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor(private readonly httpClient: HttpClient) { }

  getArticles(): Observable<any> {
    const req$ =  this.httpClient.get("assets/blog.json").pipe(share());
    req$.subscribe((articles: any) => {
      this.articles$.next(articles.articles);
      this.articles$.complete();
    })
    return req$;
  }
}
