import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { RouterModule, Routes, RouterLink } from '@angular/router';

const appRoutes: Routes = [
  { path: 'liste',      component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [RouterModule,RouterLink]
})
export class AppRoutingModule { }
