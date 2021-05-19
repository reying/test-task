import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../app.component';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.scss']
})
export class NotesContentComponent implements OnInit {

  @Input() notes: Note[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
