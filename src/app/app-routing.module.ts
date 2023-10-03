import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'work', component: WorkComponent },
  { path: '**', redirectTo: '/aboutme', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }