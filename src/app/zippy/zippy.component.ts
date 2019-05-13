import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
  </div>`})

export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<string>();
  @Output() close = new EventEmitter<string>();

  get classes() { return []; }
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('Opening...');
    } else {
      this.close.emit('Closing...');
    }
  }
}