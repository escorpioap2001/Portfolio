import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faCircleArrowDown = faCircleArrowDown;
  contactForm: FormGroup;
  isSubmitting = false;


  constructor(private router: Router,private snackBar: MatSnackBar,private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$')
      ]],
      message: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  onSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
    }


    if (this.contactForm.valid) {
      console.log('Formulario válido, enviando...');
      this.isSubmitting = true;
      
      setTimeout(() => {
        console.log('Formulario enviado:', this.contactForm.value);
  
        this.contactForm.reset();
  
        this.isSubmitting = false;
  
        this.router.navigate(['/inicio']);
      }, 2000); 
    } else {
      console.log('El formulario no es válido');
    }

    this.contactForm.reset();
  }


  mostrarNotificacion(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  clear(){
    this.contactForm.reset();
  }
  
}
