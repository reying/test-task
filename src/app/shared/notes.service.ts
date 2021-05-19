import { Injectable, OnInit } from "@angular/core";

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
      content: 'После длительного перерыва Angular Moscow Meetup наконец вернулся, да еще и в новом гибридном формате! 28 апреля мы собрали в офисе почти 100 человек и еще столько же людей следили за происходящим в прямой трансляции. Мероприятие длилось больше двух часов, мы послушали два доклада и круглый стол с экспертами, среди которых аж три GDE по Angular.'
    },
    {
      current: false,
      title: 'Заметка 3',
      content: 'На пуфиках расположились лидеры русскоязычного сообщества Angular: Алексей Охрименко, Андрей (Angular Fox) Греков, Александр Инкин, Игорь Кацуба и я между ними. Еще позвали гостем Алексея Корнеева — активного драйвера PHP-сообщества. Тема была немного провокационной, но разговор быстро вышел в позитивное русло. Похоже, Angular-сообщество по-прежнему медленно, но верно процветает. Мы даже пришли к выводу, что и в PHP-сообществе все живенько и хорошо.'
    },
    {
      current: false,
      title: 'Заметка 4',
      content: 'Круглый стол переубедил многих слушателей: они думали, что Angular затухает. Сам формат тоже оказался воспринят позитивно — будем думать над продолжением и учтем фидбек. Не расстраивайтесь, если ваш вопрос не попал на стол — мы подумаем, как реорганизовать его в более дискуссионный формат в будущем. Tempora voluptatum impedit, quo mollitia minus esse vero veritatis dignissimos aspernatur unde autem earum?'
    }
  ]
  public adding = false;
  public saveTitle: string = '';
  public saveContent: string = '';

  onToggle(title: string) {
    const idx = this.notes.findIndex(t => t.title === title)
    this.notes.forEach(item => item.current = false)
    this.notes[idx].current = !this.notes[idx].current
  }

  onOpenPopup() {
    this.adding = true;
  }

  onClosePopup() {
    this.adding = false;
  }

  onAddNote() {
    if (this.saveTitle && this.saveContent) {
      this.notes.push({current: false, title: this.saveTitle, content: this.saveContent})
      this.adding = false;
      this.onToggle(this.saveTitle)
    }
  }

}