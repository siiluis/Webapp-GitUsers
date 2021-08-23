import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FollowersGraficComponent } from './components/followers-grafic/followers-grafic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersGuard } from './users.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'perfil/:login/:score',
        component: PerfilComponent,
        canActivate: [UsersGuard],
      },
      { path: 'followers', component: FollowersGraficComponent },
    ],
  },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  declarations: [HomeComponent, SearchComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsersModule {}
