import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../../../../../core/services/article.service";
import {BehaviorSubject, Subject} from "rxjs";

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
export class ArticleComponent implements OnInit, AfterViewChecked {

  activeArticle$ = new Subject<Article>();
  article: Article = {route:'', title: '', text:''}

  constructor(private articleService: ArticleService) {
  }


  ngOnInit(): void {
    this.articleService.articles$.subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewChecked() {

  }

}
