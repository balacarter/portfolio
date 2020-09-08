import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ActnowComponent } from './projects/actnow/actnow.component';
import { MainViewComponent } from './main/main-view/main-view.component';
import { MeComponent } from './main/me/me.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: MeComponent },
  { path: 'me', component: MeComponent },
  { path: 'actnow', component: ActnowComponent },
  { path: 'main-view', component: MainViewComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
