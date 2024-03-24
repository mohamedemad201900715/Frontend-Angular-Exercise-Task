import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  @Output() valueChange = new EventEmitter<string>(); // Output property to emit value changes
  private _value: string = '';

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
    this.valueChange.emit(newValue); // Emit the new value
  }

}
