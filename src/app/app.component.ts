import { Component } from '@angular/core';
import { NotesService } from './shared/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public notesService: NotesService) { }
}
