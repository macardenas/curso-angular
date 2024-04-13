import { Component, inject} from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-apirest',
  standalone: true,
  imports: [ NgIf, CommonModule],
  providers: [CrudService],
  templateUrl: './apirest.component.html',
  styleUrl: './apirest.component.css'
})
export class ApirestComponent {


  _CrudService: CrudService = inject(CrudService)

  constructor(){}

  Products:any = "";
  TasaBCV:any = "";
  PostProductObj:any = {
    "title": "Curso Angular",
    "price": 100,
    "description": "Logramos un post",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }
  idProductpost:any ="";

  PostProductResponse:any = ""
  ProductFound:any = ""

  ActualizarProduct = {
    "title": "Ya casi terminamos!!!!!!!",
    "price": 33333
  }
  ProductDelete:boolean = false;

  GetProduct(){
    this._CrudService.getItems("https://api.escuelajs.co/api/v1/products")
    .subscribe({
      next: response => {
        console.log('Product added successfully:', response);
        this.Products = response
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }

  GetTasaBCV(){
    this._CrudService.getItems("https://service.apibcv.net/SearchBCV/ertyhbnjklo89dvty782")
    .subscribe({
      next: response => {
        console.log('Product added successfully:', response);
        this.TasaBCV = response
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }

  PostProduct(){
    this._CrudService.addPost("https://api.escuelajs.co/api/v1/products/",this.PostProductObj)
    .subscribe({
      next: (response:any) => {
        console.log('Product added successfully:', response);
        this.PostProductResponse = response
        this.idProductpost = response.id
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }

 FoundProductAdd(){
    this._CrudService.getItems(`https://api.escuelajs.co/api/v1/products/${this.idProductpost}`)
    .subscribe({
      next: (response:any) => {
        console.log('Product added successfully:', response);
        this.ProductFound = response
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }

  ACtuazizarProduct(){
    this._CrudService.addPutt(`https://api.escuelajs.co/api/v1/products/${this.idProductpost}`,this.ActualizarProduct)
    .subscribe({
      next: (response:any) => {
        console.log('Product update successfully:', response);
        this.FoundProductAdd()
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }

  DeleteProduct(){
    this._CrudService.Delete(`https://api.escuelajs.co/api/v1/products/${this.idProductpost}`)
    .subscribe({
      next: (response:any) => {
        console.log('Product delete successfully:', response);
        this.ProductDelete = true;
      },
      error: err => {
        console.error('Failed to add product:', err);
        // We can show an error message to the user or retry the request.
      }
    })
  }
}
