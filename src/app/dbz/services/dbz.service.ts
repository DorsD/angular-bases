import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Dors Venabili',
    power: 2000
  },
  { 
    id: uuid(),
    name: 'Hari Seldon',
    power: 1800
  },
  {
    id: uuid(),
    name: 'Bliss',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Arkady Darell',
    power: 1500
  }];

  addNewCharacter(character: Character): void {
    console.log('New character:', character);
    const newCharacter: Character = {
      ...character
    };
    this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    console.log('Deleting character:', this.characters.find(e => e.id === id));
    this.characters = this.characters.filter(character => character.id !== id);
  }
}