import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public headerTitle:string = 'Dashboard'
  public hasLoaded:boolean = false;
  public isLoading: boolean = false;

  constructor() { }

  changeHeaderTitle(title){
    this.headerTitle = title
  }
}
