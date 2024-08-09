import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Inventario } from '../../interfaces/Inventario';
import { InventarioService } from '../../service/Inventario/inventario.service';
import { Productos } from '../../interfaces/Productos';
import { ProductosService } from '../../service/Producto/productos.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
  MatInputModule,
FormsModule, HttpClientModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
id!: number;
producto! : string;
tipoProducto!: string;
cantidad!: number;
estado!: string;
listInventario : Inventario [] = [];
form :FormGroup;

constructor (private _inventarioService: InventarioService,
  private _productosService: ProductosService,
  private router : Router,
  private fb: FormBuilder
){
  this.form = this.fb.group({
    producto: ['', Validators.required],
    tipoProducto : ['',Validators.required],
    cantidad : ['', Validators.required],
    estado: ['', Validators.required],
  })
}

ngOnInit(): void {
this.ObtenerInventario();
}
ObtenerInventario(): void {
  this._inventarioService.getInventarios().subscribe({
    next : data => {
      console.log(data);
      this.listInventario=data;
    },
    error : error => {
      alert("Ocurrio un error");
    },
    complete : () => {
      console.info('Obtencion exitosa');
    }
  });
}
ConsultarInventario() {
  if (this.id) {
    this._inventarioService.getInventario(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.form.patchValue({
          producto: data.producto,
          tipoProducto: data.tipoProducto,
          cantidad: data.cantidad,
          estado: data.estado,
        });
      },
      error: (err) => {
        console.error('Error al consultar el inventario:', err);
        // Maneja el error según tu lógica
      },
    });
  } else {
    console.warn('ID no válido. Asegúrate de proporcionar un ID válido antes de consultar.');
  }
}
agregarInventario(){
const inventarios : Inventario ={
  producto : this.producto,
  tipoProducto : this.tipoProducto,
  cantidad: this.cantidad,
  estado : this.estado
}
this._inventarioService.addInventario(inventarios).subscribe({
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

 eliminarInventario(id? : number){
if (id == undefined){
  alert('El Id es indefinido');
  return;
}
this._inventarioService.eliminarInventario(id).subscribe({
next : data => {
  console.log('Producto Eliminado: ',data);
  this.ObtenerInventario();
},
error : error => {
  alert ("Ocurrio un error");
},
complete : () => {
  console.info('Eliminacion completada');
}
});
}


actualizarInventario (){
  if (!this.id) {
    console.warn('ID no válido. Proporciona un ID antes de actualizar.');
    return;
  }
const inventarios : Inventario ={
  id :  this.id,
  producto : this.producto,
  tipoProducto : this.tipoProducto,
  cantidad :  this.cantidad,
  estado: this.estado,
};

this._inventarioService.modificarInventario(inventarios).subscribe({
  next : data => {
    console.log('Actualización exitosa:',data);
  },
  error : (error) => {
    console.error('Error al actualizar el inventario:', error);
  },
  complete : () => {
    console.info('Modificacion completa');
  }
});
this.form.reset();
}
}
