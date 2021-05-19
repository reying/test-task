import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {Note} from '../app.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(title: string) {
    this.onToggle.emit(title)
  }

}
