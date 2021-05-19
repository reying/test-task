import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesHeaderComponent } from './notes-header/notes-header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesContentComponent } from './notes-content/notes-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesHeaderComponent,
    NotesListComponent,
    NotesContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
