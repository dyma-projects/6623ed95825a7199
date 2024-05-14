import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') couleur: string | null = null;

  @HostListener('window:keydown.arrowup', ['$event']) windowUp() {
    this.couleur ="red";   
  }

  @HostListener('window:keydown.arrowdown', ['$event']) windowDown() {
    this.couleur ="green";   
  }

  @HostListener('window:keydown.arrowleft', ['$event']) windowLeft() {
    this.couleur ="blue";   
  }

  @HostListener('window:keydown.arrowright', ['$event']) windowRight() {
    this.couleur ="orange";   
  }
}
