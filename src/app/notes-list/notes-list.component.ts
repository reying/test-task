import { Component, OnInit } from '@angular/core'
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

  onClick(title: string) {
    this.notesService.onToggle(title)
  }

  onOpen() {
    this.notesService.onOpenPopup()
  }

}
