import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { UserService } from 'src/app/commons/services/auth/user.service';
import { StateService } from '@uirouter/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public time:any = [];
  public capital:any=[];
  public chart:any;
  private selectedStrategy = "";
  private lastDateUpdated:any;
  private pipe = new DatePipe('en-US');
  private activated = false;

  constructor(
    private nav: NavigationService,
    private auth: AuthService,
    private state: StateService,
  ) { }

  async ngOnInit() {

    if (this.state.params.activated) {
      this.activated = true;

      setTimeout(() => {
        this.activated = false;
      }, 3000)
    }

    this.nav.changeHeaderTitle('Dashboard');

    setTimeout(() => {
      this.nav.hasLoaded = false
    }, 100)

    this.auth.getUser();

    if (this.auth.user.id == null) {
      // get user information from the backend. (sync)
      await this.auth.setuser();
    }

  }
}
