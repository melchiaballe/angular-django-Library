import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BookDetailsComponent } from './modals/book-details/book-details.component';
import { AddBookMessagesComponent } from './modals/add-book-messages/add-book-messages.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavigationComponent, 
    SideMenuComponent, 
    FooterComponent, 
    BookDetailsComponent, 
    AddBookMessagesComponent],
  entryComponents: [
    BookDetailsComponent,
    AddBookMessagesComponent
  ],
})
export class PartialsModule { }
