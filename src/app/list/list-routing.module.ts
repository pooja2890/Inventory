import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'list', redirectTo: 'list/index', pathMatch: 'full'},
  { path: 'list/index', component: IndexComponent },
  { path: 'list/:listId/view', component: ViewComponent },
  { path: 'list/create', component: CreateComponent },
  { path: 'list/:listId/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
