import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigateToId = '';

  constructor() { }

  setNavigateId(id: string): void {
    console.log("ID", id);
    this.navigateToId = id;
  }

  getNavigateId(): string {
    return this.navigateToId;
  }
}
