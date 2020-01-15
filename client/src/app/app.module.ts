import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { NotesListComponent } from "./components/notes/notes-list/notes-list.component";
import { AddNoteComponent } from "./components/notes/add-note/add-note.component";
import { EditNoteComponent } from "./components/notes/edit-note/edit-note.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotesListComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
