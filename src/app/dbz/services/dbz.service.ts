import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export default class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilln',
    power: 1000
  },{
    id: uuid(),
    name: 'Gokú',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ): void {

    const newCharacter: Character = { id: uuid(), ...character};
    //   Los 3 puntos sirven para traer todas las propiedades de character
    //   y así ya no mapear todo como abajo:
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    this.characters.push(newCharacter);
  }


  // onDeleteCharacter( index: number ){
  //   this.characters.splice(index,1);
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
    //console.log(this.characters);
  }

}
