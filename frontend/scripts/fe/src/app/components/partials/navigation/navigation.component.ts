import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { StateService } from '@uirouter/core';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { User } from 'src/app/commons/models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private backtestLimit= 0;
  private liveCount= 0;


  constructor(
    private state : StateService,
    private nav: NavigationService,
    private auth: AuthService,
  ) { }

  async ngOnInit() {

    if(this.auth.user.id == null){
      await this.auth.setuser();
    }

    this.auth.getUser();

  }


}
