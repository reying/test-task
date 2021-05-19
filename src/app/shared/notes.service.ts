import { Injectable } from "@angular/core";

export interface Note {
  current: boolean
  title: string
  content: string
}

@Injectable({providedIn: 'root'})
export class NotesService {
  public notes: Note[] = [
    {
      current: true,
      title: 'Заметка 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam consequatur, cumque illo assumenda eveniet earum iste ab hic dolorem, soluta nam suscipit commodi odit provident repellat maiores, quasi eligendi! Tempora voluptatum impedit, quo mollitia minus esse vero veritatis dignissimos aspernatur unde autem earum?'
    },
    {
      current: false,
      title: 'Заметка 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam consequatur, cumque illo assumenda eveniet earum iste ab hic dolorem, soluta nam suscipit commodi odit provident repellat maiores, quasi eligendi! Tempora voluptatum impedit, quo mollitia minus esse vero veritatis dignissimos aspernatur unde autem earum?'
    },
    {
      current: false,
      title: 'Заметка 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam consequatur, cumque illo assumenda eveniet earum iste ab hic dolorem, soluta nam suscipit commodi odit provident repellat maiores, quasi eligendi! Tempora voluptatum impedit, quo mollitia minus esse vero veritatis dignissimos aspernatur unde autem earum?'
    },
    {
      current: false,
      title: 'Заметка 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam consequatur, cumque illo assumenda eveniet earum iste ab hic dolorem, soluta nam suscipit commodi odit provident repellat maiores, quasi eligendi! Tempora voluptatum impedit, quo mollitia minus esse vero veritatis dignissimos aspernatur unde autem earum?'
    }
  ]

  onToggle(title: string) {
    const idx = this.notes.findIndex(t => t.title === title)
    this.notes.forEach(item => item.current = false)
    this.notes[idx].current = !this.notes[idx].current
  }

}