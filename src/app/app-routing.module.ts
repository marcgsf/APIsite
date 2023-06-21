import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title:'Mangaratiba Casa de Praia', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', title:'Sobre agente', component: AboutComponent },
  { path: 'contact', title:'Reservas', component: ContactComponent },
  { path: 'e404', title: 'Erro 404', component: E404Component },
  { path: '**', redirectTo: 'e404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
