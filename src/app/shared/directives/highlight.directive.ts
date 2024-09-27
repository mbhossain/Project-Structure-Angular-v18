import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() defaultColor: string = 'yellow';  // Default highlight color

  constructor(private el: ElementRef) { }

  // HostListener to listen for mouse events
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Remove highlight on mouse leave
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
