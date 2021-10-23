import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";
import {ArticleService} from "./components/articles/services/article.service";

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private navigationService: NavigationService, private readonly articleService: ArticleService) {
  }

  ngOnInit(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
    this.articleService.getArticles();
  }

  ngOnDestroy(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'scroll';
    body.style.position = 'relative';
  }

  ngAfterViewInit(): void {
    if (this.navigationService.getNavigateId() !== ''){
      const element = document.querySelector(`#${this.navigationService.getNavigateId()}`) as HTMLDivElement;
      if (element) {
        element.scrollIntoView();
      }
    }
  }

}
