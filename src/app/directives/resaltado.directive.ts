import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevocolor: string;

  constructor(private el: ElementRef) {
    console.log('Directiva lamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    // El doble || es para poner por defecto un valor si no llega nada
    this.resaltar(this.nuevocolor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
