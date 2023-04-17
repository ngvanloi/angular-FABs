import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.scss'],
})
export class FloatingActionButtonComponent {
  @Input() label?: string;
  @Input() egIconName?: string;
  @Input() disabled: boolean = false;
  @Input() placement?: string;
  // @Input() type?: string;
  // @Input() form?: string;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
  myFunction(): void {
    console.log('Scroll');
  }
}
