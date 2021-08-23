import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputUsername = new FormControl('', wordNotValid('doublevpartners'));
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  findUser() {
    this.usersService.getProfiles(this.inputUsername.value);
  }
}

export function wordNotValid(word: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    if (control.value.length < 4) {
      return { minInvalid: true };
    }
    return value === word ? { wordnotValid: true } : null;
  };
}
