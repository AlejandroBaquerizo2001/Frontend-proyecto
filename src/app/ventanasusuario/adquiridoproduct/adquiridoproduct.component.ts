import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Adquirido } from '../../interfaces/Adquirido';
import { AdquiridoService } from '../../service/Adquirido/adquirido.service';
import { ProductosService } from '../../service/Producto/productos.service';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-adquiridoproduct',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
     MatFormFieldModule,
     MatInputModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
    FormsModule],
  templateUrl: './adquiridoproduct.component.html',
  styleUrl: './adquiridoproduct.component.css'
})
export class AdquiridoproductComponent implements OnInit  {
id! : number;
producto! : string;
valor!:number;
usuario!: string;
fechaAdquirido! : Date;
  listAdquirido : Adquirido [] = [];
form : FormGroup;
  constructor(private _adquiridoService : AdquiridoService,
   private fb : FormBuilder
  ){
    this.form = this.fb.group({
      producto : ['', Validators.required],
      valor : ['', Validators.required],
      usuario : ['', Validators.required],
      fechaAdquirido : ['', Validators.required],
    })
  }
  ngOnInit(): void {
  this.ObtenerAdquiridos();
  }

ObtenerAdquiridos() : void {
  this._adquiridoService.getAdquiridos().subscribe({
    next : data => {
      console.log(data);
      this.listAdquirido = data;
    },
    error : error => {
      alert ("Ocurrio un error");
    },
    complete : () => {
console.info('Obtencion completa');
    }
  });
}
AgregarAdquirido(){
  const adquirido : Adquirido = {
    producto : this.producto,
    valor : this.valor,
    usuario : this.usuario,
    fechaAdquirido : this.fechaAdquirido
  }
  this._adquiridoService.addAdquirido(adquirido).subscribe({
    next : data =>{
      console.log(data);
    },
    error : error => {
      alert("error");
    },
    complete :() =>{
      console.info('agregado exitoso');
      alert("Datos agregados exitosamente");
    }
  });
  this.form.reset();
}
  eliminarAdquirido(id? : number):void{
if (id == undefined) {
 alert ('El id es indefinido');
 return;
}

this._adquiridoService.eliminarAdquirido(id).subscribe({
  next : data => {
    console.log('Adquirido Eliminado: ', data);
    this.ObtenerAdquiridos();
  },
  error : error => {
    console.log("Ocurrio un error");
  },
complete: () => {
  console.info('Eliminacion completa');
  alert ("Eliminacion exitosa");
}
});
}

  ModificarAdquirido(id? : number): void{
if (id === undefined){
console.warn('Id no valido');
return;
}
const adquirido : Adquirido = {
  id : id,
  producto : this.form.get('producto')?.value,
  valor : this.form.get('valor')?.value,
  usuario : this.form.get('usuario')?.value,
  fechaAdquirido : this.form.get('fechaAdquirido')?.value,
};
this._adquiridoService.modificarAdquirido(adquirido).subscribe({
  next :  data =>{
    console.log(data);
    this.ObtenerAdquiridos();
  },
  error : (error) =>{
    console.error(error);
    alert("Ocurrio un error");
  },
  complete : () =>{
    console.info('Modificacion exitosa');
    alert("Actualizacion exitosa");
  }
});
this.form.reset();
  }
}

