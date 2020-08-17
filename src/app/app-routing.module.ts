import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActnowComponent } from './projects/actnow/actnow.component';
import { MainViewComponent } from './main/main-view/main-view.component';

const routes: Routes = [
  { path: '', component: ActnowComponent },
  { path: 'actnow', component: ActnowComponent },
  { path: 'main-view', component: MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
