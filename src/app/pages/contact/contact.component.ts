import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  reservForm!: FormGroup;



  constructor(
    private service: OrderDetailsService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }
  reservasData: any;

  ngOnInit(): void {
    this.reservasData = this.service.reservasDetails;
    this.createForm();
  }

  createForm() {
    this.reservForm = this.formBuilder.group({
      name: [''],
      email: [''],
      telephone: [''],
      inDate: [''],
      outDate: ['']
    });
  }

  public formSubmit() {
    console.log(this.reservForm.value)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('http://localhost:3000/reservas', this.reservForm.value, httpOptions)
      .subscribe(

        (responseData) => {
          alert('Sua reserva foi enviada com sucesso')
        }

      );
  }

}



