import { FormOne } from './../../components/form-one/form-one';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownValue } from 'src/app/core/services/interfaces/dropdown-value';

@Component({
  selector: 'app-container-one',
  templateUrl: './container-one.component.html',
  styleUrls: ['./container-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerOneComponent implements OnInit {

  dropdownValues$: Observable<DropdownValue[]>;

  constructor() { }

  ngOnInit() {
  }

  logSave(val: FormOne): void {
    console.log(val);
  }
}