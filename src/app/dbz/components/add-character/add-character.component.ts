import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); 


  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0 ) return;
    this.onNewCharacter.emit({
      id: uuid(),
      name: this.character.name,
      power: this.character.power
    });
    this.character = {
      id: '',
      name: '',
      power: 0
    }
  }
}
