import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersModule, RouterModule.forChild(routes)],
})
export class ModulesAppModule {}
