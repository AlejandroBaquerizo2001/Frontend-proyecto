import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Productos } from '../../interfaces/Productos';
import { ProductosService } from '../../service/Producto/productos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ingresoproduct',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
    MatInputModule,
  DatePipe,
FormsModule, HttpClientModule],
  templateUrl: './ingresoproduct.component.html',
  styleUrl: './ingresoproduct.component.css'
})
export class IngresoproductComponent {
  id!: number;
  nombre!: string;
  tipoProducto!: string;
  cantidad!: number;
fechaIngreso!: Date;
listProductos : Productos [] = [];
form :FormGroup;

constructor (private _productosService: ProductosService,
  private router : Router,
  private fb: FormBuilder
){
  this.form = this.fb.group({
    nombre: ['', Validators.required],
    tipoProducto : ['',Validators.required],
    cantidad : ['', Validators.required],
    fechaIngreso : ['', Validators.required],
  })
}

ngOnInit(): void {
  this.ConsultarProducto();
this.ObtenerProductos();
}
ObtenerProductos(): void {
  this._productosService.getProductos().subscribe({
    next : data => {
      console.log(data);
      this.listProductos=data;
    },
    error : error => {
      alert("Ocurrio un error");
    },
    complete : () => {
      console.info('Obtencion exitosa');
    }
  });
}
ConsultarProducto(): void {
  this._productosService.getProducto(this.id).subscribe({
    next : data =>{
      console.log(data);
      this.form.patchValue({
        nombre : data.nombre,
        tipoProducto : data.tipoProducto,
        cantidad : data.cantidad,
        fechaIngreso : data.fechaIngreso,
      })
    },
    error : error => {
      alert("Ocurrio un error");
    },
    complete : () => {
    console.info('completado')
  }
  });
}

agregarProducto(){
const producto : Productos ={
  nombre: this.nombre,
  tipoProducto : this.tipoProducto,
  cantidad: this.cantidad,
  fechaIngreso : this.fechaIngreso
}
this._productosService.addProductos(producto).subscribe({
  next : data =>{
    console.log(data);
  },
  error : error =>{
    alert("Ocurrio un error");
  },
  complete : () =>{
    console.info('Agregar producto correcto');
    alert("Agregar producto correcto");
  }
});

this.form.reset();
}

 eliminarProducto(id? : number){
if (id == undefined){
  alert('El Id es indefinido');
  return;
}
this._productosService.eliminarProductos(id).subscribe({
next : data => {
  console.log('Producto Eliminado: ',data);
  this.ObtenerProductos();
},
error : error => {
  alert ("Ocurrio un error");
},
complete : () => {
  console.info('Eliminacion completada');
}
});
}


actualizarProducto (){
const producto : Productos ={
  nombre: this.nombre,
  tipoProducto : this.tipoProducto,
  cantidad :  this.cantidad,
  fechaIngreso : this.fechaIngreso
}
this._productosService.modificarProductos(producto).subscribe({
  next : data => {
    console.log(data);
  },
  error : error => {
    alert ("ocurrio un error");
  },
  complete : () => {
    console.info('Modificacion completa');
  }
});
this.form.reset();
}
}
