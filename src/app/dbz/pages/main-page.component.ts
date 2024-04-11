import DbzService from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( public dbzService: DbzService ) {} //debería de ser PRIVATE, pero me marca error

  get characters(): Character[] {
    return [...this.dbzService.characters]; //los 3 puntos crean una copia de los datos de characters
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }
}
