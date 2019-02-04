import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { AllbooksComponent } from './books/allbooks/allbooks.component';
import { SpecbookComponent } from './books/specbook/specbook.component';
import { BooksService } from './shared/service/books.service';
import { AddBookComponent } from './books/add-book/add-book.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AllbooksComponent,
    SpecbookComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    AddBookComponent
  ],
  providers: [ BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
