import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesHeaderComponent } from './notes-header/notes-header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesContentComponent } from './notes-content/notes-content.component';
import { AddNotePopupComponent } from './add-note-popup/add-note-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesHeaderComponent,
    NotesListComponent,
    NotesContentComponent,
    AddNotePopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
