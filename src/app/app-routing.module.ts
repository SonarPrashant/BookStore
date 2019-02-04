import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllbooksComponent } from "./books/allbooks/allbooks.component";
import { SpecbookComponent } from "./books/specbook/specbook.component";

const routes: Routes = [
  { path: 'allbooks', component: AllbooksComponent },
  { path: 'Inspbook', component: SpecbookComponent , data:{ bookType : 'Inspirational'}},
  { path: 'Ficbook', component: SpecbookComponent , data:{ bookType : 'Fictional'}},
  { path: 'Selfbook', component: SpecbookComponent , data:{ bookType : 'Selfhelp'}},
  { path: '**', redirectTo: 'allbooks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
