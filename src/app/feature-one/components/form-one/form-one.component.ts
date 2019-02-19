import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormOne } from './form-one';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {
  form: FormGroup;
  @Input() 
  @Output() save = new EventEmitter<FormOne>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      dropdown: null,
      name: [''],
      address: new FormControl()
    });
  }

  // TODO: Patch value when ngOnChanges

  submit(): void {
    this.save.emit(this.form.value);
  }
}