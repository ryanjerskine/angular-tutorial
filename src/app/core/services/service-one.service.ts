import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownValue } from './interfaces/dropdown-value';
import { DropdownValues } from './data/dropdown-values';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor() { }

  getDropdownValues(): Observable<DropdownValue[]> {
    return of(DropdownValues);
  }
}