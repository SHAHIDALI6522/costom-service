import { Injectable } from '@angular/core';
import { VariableModel } from '../variablesModel/variable-model';

@Injectable({
  providedIn: 'root',
})
export class VariableServiceService {
  constructor() {}
  public variable: VariableModel[] = [];
}
