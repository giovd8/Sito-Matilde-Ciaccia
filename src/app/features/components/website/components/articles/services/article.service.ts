import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {shareReplay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

interface Article {
  route: string;
  title: string;
  text: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor(private readonly httpClient: HttpClient) {
  }

  getArticles(): Observable<any> {
    const req$ = this.httpClient.get("assets/blog.json").pipe(shareReplay(1));
    req$.subscribe((articles: any) => {
      this.articles$.next(articles.articles);
    })
    return req$;
  }
}
