import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigateToId = new BehaviorSubject<string>('');

  constructor() {
  }

  setNavigateId(id: string): void {
    this.navigateToId.next(id);
  }

  getNavigateId(): string {
    return this.navigateToId.getValue();
  }
}
