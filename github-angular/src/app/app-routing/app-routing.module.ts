import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../components/main-layout/main-layout.component';
import {BlocksPageComponent} from '../components/blocks-page/blocks-page.component';
import {TablePageComponent} from '../components/table-page/table-page.component';
import {UserComponent} from '../components/user/user.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'blocks', component: BlocksPageComponent},
      {path: 'table', component: TablePageComponent},
      {path: 'user/:id', component: UserComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
