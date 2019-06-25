import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color: string = 'yellow';

  constructor(private hostEl: ElementRef) { }

  ngOnInit() { }

  @HostListener('mouseover')
  onMouseover() {
    this.setColor(this.color);
  }

  @HostListener('mouseout')
  onMouseout() {
    this.setColor('');
  }

  private setColor(color) {
    this.hostEl.nativeElement.style.backgroundColor = color;
  }

}
