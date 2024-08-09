import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/Usuario';
import { UsuarioService } from '../../service/usuario.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatIconModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
id! : number;
nombre!: string;
identidad!: string;
correo! : string;
clave! : string;
listadoUsuario : Usuario [] = [];

form : FormGroup;

constructor(private _usuarioService : UsuarioService,
  private router : Router,
  private fb : FormBuilder
){
this.form = this.fb.group({

})
}
ngOnInit(): void {
this.ObtenerUsuarios();
}

agregarUsuario(){
const usuario : Usuario = {
  nombre : this.nombre,
  identidad : this.identidad,
  correo : this.correo,
  clave : this.clave
}

this._usuarioService.addUsuario(usuario).subscribe({
next : data => {
  console.log(data);
},
error : error => {
  alert ("Ocurrio un error");
},
complete : () => {
  console.info('Agregar Usuarios');
  alert("Se registro Usuarios");
}
});
this.form.reset();
}

ObtenerUsuarios () : void {
  this._usuarioService.getUsuarios().subscribe({
    next : data => {
      console.log(data);
      this.listadoUsuario = data;
    },
    error : error => {
      alert("Ocurrio un error");
    },
    complete : () => {
      console.info('Obtenci[on exitosa');
    }
  });
}
}
