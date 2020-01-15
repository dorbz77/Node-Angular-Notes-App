import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Note } from "./../models/Note";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class NotesService {
  constructor(private http: HttpClient) {}

  apiUrl: string = "http://localhost:5000/notes";

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNoteById(id): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/${id}`);
  }

  addNote(note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, httpOptions);
  }

  editNote(id, note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note, httpOptions);
  }

  deleteNote(id: string): Observable<Note> {
    return this.http.delete<Note>(`${this.apiUrl}/${id}`);
  }
}
