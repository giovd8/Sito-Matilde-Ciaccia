export interface NavigationItem {
  id?: string;
  title: string;
  background: string;
  items: { navigatePage: string;text:string;} [];
  clicked: boolean;
}
