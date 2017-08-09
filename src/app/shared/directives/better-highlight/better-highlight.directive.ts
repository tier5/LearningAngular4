import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'tranparent';

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'transparent';
  }
}
