import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  private dragging = false;
  /*
  pointerdown => dragStart
  document => pointermove => dragMove
  document => pointerup => dragEnd */

  @HostListener('pointerdown') onPointerDown():void{
    this.dragging = true;
    console.log('drag Start!');
  }

  @HostListener('document:pointermove') onPointerMove():void{
    if(!this.dragging){
      return;
    }
    console.log('drag move!');
  }

  @HostListener('document:pointerup') onPointerUp():void{
    if(!this.dragging){
      return;
    }
    console.log('drag end!');
    this.dragging = false;
  }

  constructor() { }

}
