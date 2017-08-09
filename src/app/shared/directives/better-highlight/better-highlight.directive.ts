import {Directive, Input, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColour: string = 'transparent';
  @Input() highlightColour: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.defaultColour;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColour;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor =  this.defaultColour;
  }
}
