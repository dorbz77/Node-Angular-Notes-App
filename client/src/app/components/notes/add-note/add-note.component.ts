import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotesService } from "./../../../services/notes.service";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"]
})
export class AddNoteComponent implements OnInit {
  constructor(
    private notesServie: NotesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  addNoteForm: FormGroup;

  ngOnInit() {
    this.addNoteForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  addNote(note) {
    this.notesServie.addNote(note).subscribe(data => {
      this.router.navigate(["/"]);
    });
  }

  handleSubmit() {
    const formValues = this.addNoteForm.value;
    this.addNote(formValues);
  }
}
