import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'client', component: ClientComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  { 
    path: '', redirectTo: 'client', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
