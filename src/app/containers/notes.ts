import {Component} from '@angular/core';
import {NoteCard} from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
    NoteCard
  ],
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        note creator here
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card [note]="note"></note-card>
        </div>
      </div>
    </div>
  `
})

export class Notes {
  note = { title: 'new note', value: 'new note value', color: 'seagreen'}
};
