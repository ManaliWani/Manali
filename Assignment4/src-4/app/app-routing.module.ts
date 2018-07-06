import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsComponent } from './Os/Os.component';
import { componentFactoryName } from '@angular/compiler';
import { PlComponent } from './Pl/Pl.component';
import { DbComponent } from './Db/Db.component'

const routes: Routes = [
  {path : 'os', component:OsComponent},
  {path : 'pl' ,component:PlComponent},
  {path : 'Db' ,component:DbComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
