import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private state: StateService,
    private nav: NavigationService,
  ) { }

  ngOnInit() {

  }

  onDashboardClick(event){
    event.preventDefault()
    this.state.go('dashboard')
  }

  onSignalsClick(event){
    event.preventDefault()
    this.state.go('signals')
  }

  onMarketplaceClick(event){
    event.preventDefault()
    this.state.go('marketplace')
  }

  onStrategiesClick(event){
    event.preventDefault()
    this.state.go('strategies')
  }

  onCreateStrategyClick(event){
    event.preventDefault()
    this.state.go('create-strategy')
  }

  onLogoutClick(event){
    event.preventDefault()
    this.state.go('logout')
  }

  onSettingsClick(event){
    event.preventDefault()
    this.state.go('settings')
  }



}
