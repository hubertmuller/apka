import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { ListaComponent } from './lista/lista.component';
import { ZamowieniaComponent } from './zamowienia/zamowienia.component';

const routes: Routes = [
 { path: "zamowienia", component: ZamowieniaComponent},
 { path: "lista", component: ListaComponent},
 { path: "realizacja", component: FormularzComponent},
 { path: "main", component: KoszykComponent},
 { path: "", redirectTo: '/main', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
