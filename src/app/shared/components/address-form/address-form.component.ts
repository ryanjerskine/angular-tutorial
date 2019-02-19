import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressFormComponent),
    multi: true
  }]
})
export class AddressFormComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;
  public onTouched: () => void = () => {};
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false});
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

}