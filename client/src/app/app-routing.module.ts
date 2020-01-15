import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotesListComponent } from "./components/notes/notes-list/notes-list.component";
import { AddNoteComponent } from "./components/notes/add-note/add-note.component";
import { EditNoteComponent } from "./components/notes/edit-note/edit-note.component";

const routes: Routes = [
  { path: "", component: NotesListComponent },
  { path: "add", component: AddNoteComponent },
  { path: "edit/:id", component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
