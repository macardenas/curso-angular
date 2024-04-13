import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {


  title = 'Template driven forms';
 
  user:any ={
    name : '',
    password : '',
    email: ''
  }

  onSubmit(){
    console.log(this.user)
  }
}
