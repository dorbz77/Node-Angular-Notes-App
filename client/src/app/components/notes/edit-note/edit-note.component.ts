import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NotesService } from "./../../../services/notes.service";
import { Note } from "./../../../models/Note";

@Component({
  selector: "app-edit-note",
  templateUrl: "./edit-note.component.html",
  styleUrls: ["./edit-note.component.css"]
})
export class EditNoteComponent implements OnInit {
  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  EditNoteForm: FormGroup;
  id: String = "";
  note: any = {};

  ngOnInit() {
    this.EditNoteForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required, Validators.minLength(5)]]
    });
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.notesService.getNoteById(this.id).subscribe(data => {
        this.note = data;
        this.EditNoteForm.get("title").setValue(this.note.title);
        this.EditNoteForm.get("description").setValue(this.note.description);
      });
    });
  }

  EditNote(note) {
    this.notesService.editNote(this.id, note).subscribe(data => {
      this.router.navigate(["/"]);
    });
  }

  handleSubmit() {
    const formValues = this.EditNoteForm.value;
    this.EditNote(formValues);
  }
}
