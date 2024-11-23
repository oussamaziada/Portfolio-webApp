import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactFormModel = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() {}

  sendEmail(form: any) {
    if (form.valid) {
      const templateParams = {
        from_name: `${this.contactFormModel.firstName} ${this.contactFormModel.lastName}`,
        email: this.contactFormModel.email,
        phone: this.contactFormModel.phone,
        message: this.contactFormModel.message
      };

      emailjs.send('service_mwzw3o8', 'template_rz7vzon', templateParams, 'SUjaaEJyzhGxdalsm')
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your message has been sent successfully.');
        }, (error) => {
          console.error('Error sending email', error);
          alert('There was an error sending your message. Please try again later.');
        });
    }
  }
}
