import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'ale-san', loadChildren: './ale-san/ale-san.module#AleSanPageModule' },
  { path: 'leo-messi', loadChildren: './leo-messi/leo-messi.module#LeoMessiPageModule' },
  { path: 'c-ronaldo', loadChildren: './c-ronaldo/c-ronaldo.module#CRonaldoPageModule' },
  { path: 'ney-jr', loadChildren: './ney-jr/ney-jr.module#NeyJrPageModule' },
  { path: 'k-bruy', loadChildren: './k-bruy/k-bruy.module#KBruyPageModule' },
  { path: 's-aguero', loadChildren: './s-aguero/s-aguero.module#SAgueroPageModule' },
  { path: 'a-vidal', loadChildren: './a-vidal/a-vidal.module#AVidalPageModule' },
  { path: 'e-paredes', loadChildren: './e-paredes/e-paredes.module#EParedesPageModule' },
  { path: 'perfil-jugador', loadChildren: './perfil-jugador/perfil-jugador.module#PerfilJugadorPageModule' },
  { path: 'acerca-de-pagina', loadChildren: './acerca-de-pagina/acerca-de-pagina.module#AcercaDePaginaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
