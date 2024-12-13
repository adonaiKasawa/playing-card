import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  @Input() occupation = '';
  @Output() addItemEvent = new EventEmitter<string>();

  isServerRunning = false;
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  
  isEditable = true;
  message: string = "";

 
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  
  onMouseOver(viewmessage: boolean) {
    this.message = viewmessage ? 'Way to go 🚀' : '';
  }
}
