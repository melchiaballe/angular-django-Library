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

  onStateChange(event, state, header){
    event.preventDefault();
    this.state.go(state);
    this.nav.changeHeaderTitle(header);
  }



}
