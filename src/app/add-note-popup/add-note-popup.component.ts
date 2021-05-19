import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-add-note-popup',
  templateUrl: './add-note-popup.component.html',
  styleUrls: ['./add-note-popup.component.scss']
})
export class AddNotePopupComponent implements OnInit {

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.notesService.onClosePopup()
  }

  onAdd() {
    this.notesService.onAddNote()
  }

}
