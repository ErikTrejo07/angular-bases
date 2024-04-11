
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //onDelete = Index value: number;
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // @Output()
  // public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // public character: Character = {
  //   name: '',
  //   power: 0
  // };

  // onDeleteCharacter(index: number):void {
  onDeleteCharacter( id?: string):void {

    if ( !id ) return;

    this.onDelete.emit( id );
    //console.log({id});
    //this.onDelete.emit( index );
  }
}
