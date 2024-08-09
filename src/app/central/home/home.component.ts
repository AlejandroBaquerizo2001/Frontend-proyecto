import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatInputModule, MatCardModule , MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  longText = `La medicina física y rehabilitación es una especialidad médica que tiene por objeto
  la valoración, diagnóstico, prevención y tratamiento de las discapacidades derivadas de enfermedades y
  accidentes, utilizando para ellos todos los métodos a su alcance (físicos, medicamentosos, educacionales.)`;

  longText1 = `Los rayos X son una forma de radiación electromagnética, similar a la luz visible.
   Sin embargo, a diferencia de la luz, los rayos X tienen mayor energía y
  pueden atravesar la mayoría de los objetos, incluso el cuerpo.`;

  longText2 = `Un análisis clínico o prueba de laboratorio es un tipo de prueba exploratoria que consiste en la toma de muestras biológicas de un paciente para su posterior análisis en laboratorio.​
  Brinda un resultado objetivo, que puede ser cuantitativo o cualitativo. `;
}
