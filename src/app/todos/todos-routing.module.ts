import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: ':id', component: TodoItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
