import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'taskly-password-input',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent {

  @Input() placeholder: string = '********';
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  show: boolean = false;

  constructor() {}

  toggleShowPassword() {
    this.show = !this.show;
  }

  onType(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }

}
