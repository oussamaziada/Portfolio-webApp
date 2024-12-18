import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  downloadPdf() {
    const pdfUrl = 'assets/OussamaZiada.pdf'; // Update with your local PDF file path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'OussamaZiada.pdf';
    link.click();
    document.body.removeChild(link);
  }
}
