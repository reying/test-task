import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.scss']
})
export class NotesContentComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

}
