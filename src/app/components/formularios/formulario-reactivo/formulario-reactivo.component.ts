import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe,CommonModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

  constructor(private formBuilder: FormBuilder)
  {}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm);
  }

}
