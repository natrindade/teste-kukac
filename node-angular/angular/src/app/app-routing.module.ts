import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './pages/veiculo/veiculo.component';

const routes: Routes = [
  { path: 'veiculo', component: VeiculoComponent },
  { path: '', redirectTo: '/veiculo', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
