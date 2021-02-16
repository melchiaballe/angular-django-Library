import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [NavigationComponent, SideMenuComponent, FooterComponent]
})
export class PartialsModule { }
