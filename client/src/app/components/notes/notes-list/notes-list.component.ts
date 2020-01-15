import { Note } from "./../../../models/Note";
import { Component, OnInit } from "@angular/core";
import { NotesService } from "./../../../services/notes.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.css"]
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NotesService) {}

  getNotes() {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  deleteNote(id) {
    this.noteService.deleteNote(id).subscribe(data => {
      this.getNotes();
    });
  }

  ngOnInit() {
    this.getNotes();
  }
}
