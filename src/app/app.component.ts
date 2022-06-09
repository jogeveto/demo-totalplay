import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TotalService } from './services/total.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  totalForm!: FormGroup;
  send: boolean = false;

  constructor(
    private service: TotalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.totalForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      tiempo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      barrio: new FormControl('', [Validators.required]),
      proveedor: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.totalForm.controls;
  }

  onSubmit(form: FormGroup) {    
    const body = {
      "producto": 'demo-total-play',
      "token": "6cf2a746-af17-40c1-91d2-68d601a76f57",
      "telefono": form.value.telefono,
      "nombre-completo": form.value.nombre,
      "direccion": form.value.direccion,
      "barrio": form.value.barrio,
      "proveedor-internet": form.value.proveedor,
      "tiempo-proveedor": form.value.tiempo,
      "codigo-promotor": form.value.codigo
    };
    this.service.SendForm(body).subscribe(resp => {
      this.send = true;
      Swal.fire(
        'Excelente!',
        'Gracias por tomarse el tiempo para diligenciar el formulario.',
        'success'
      )
    });
  }

}
