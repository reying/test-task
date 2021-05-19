import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {Note} from '../app.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  @Input() notes: Note[] = []
  @Output() onToggle = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(title: string) {
    this.onToggle.emit(title)
  }

}
