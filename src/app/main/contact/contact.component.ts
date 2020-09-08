import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactService } from './contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contact: ContactService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.postMessage(FormData)
    .subscribe(response => {
      this.contactForm.reset();
      this._snackBar.open("Your form has been recieved, thank you!", "Dismiss", {
        duration: 3000,
      });
      console.log(response)
      
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
      this._snackBar.open("There was an error submitting, please try again", "Dismiss", {
        duration: 3000,
      });
    })
  }

}
