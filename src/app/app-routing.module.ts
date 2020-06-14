import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeResultComponent } from './time-result/time-result.component';


const routes: Routes = [
  { path: '', component: TimeResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
