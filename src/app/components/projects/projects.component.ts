import { Component, TemplateRef } from '@angular/core';
import { project } from 'src/app/model/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: project[];
  path1:string="https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p";
  constructor(private modalService: NgbModal) {
    this.projects = [
           new project(
        'Graph transformers',
        'IA',
        'Deep learning, Graph-ml, Graph theory, Image processing, Python, TensorFlow, PyTorch, Transformers, CNN',
        '2024',
        'https://github.com/oussamaziada/graph-transformers',
        'A project focused on applying Graph Transformers to human embryo classification, exploring the extension of transformer networks to graphs for machine learning.',
        ['thumbnail.jpg','image 1.png','image 2.png'],
        "",
        "Rapport_PFA.pdf"
        
      ),
      new project(
        'Data-Driven Models for Rainfall and River Water Level Forecasting',
        'IA',
        'deep learning, Time-series analysis, Python, Pandas, TensorFlow, Data visualization, Project management',
        '2024',
        '',
        'Collected, cleaned, and prepared data for trend analysis of meteorological and hydrological parameters in India, and developed predictive models to estimate these parameters using machine learning techniques.',
        ['thumbnail.jpg'],
        "",
        "Internship report"
        
      ),
      
      new project(
        'Club Hub',
        'Web Dev',
        'Nest JS',
        '2024',
        'https://github.com/oussamaziada/clubs-hub-master',
        ' Development of a website facilitating student engagement by providing a space for inter-club coordination, idea sharing, and event participation. As part of a team of three, my task was to design the back-end of this website using NestJS ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "",
        "ClubHub"

        
      ),
      new project(
        'YOLOv8-animal pose estimation',
        'IA',
        'Yolo V8m',
        '2024',
        'https://github.com/MedSalimBenOmrane/YOLOv8-animal-pose-estimation',
        'We are fine-tuning YOLOv8m-pose, pre-trained for human pose estimation, for animal pose estimation using the MacaquePose dataset. This aims to enhance pose detection accuracy in animals.',
        ['thumbnail.jpg','image 1.jpg'],
        "",
        ""

        
      ),
   
      new project(
        'University results analysis',
        'Data analysis',
        'Data analysis,Python, matplotlib,Seaborn, pandas, Data storytelling, PowerBI',
        '2023',
        '',
        "Data analysis of Tunisian university results and implementation of an interactive skills dashboard..",
        ['thumbnail.jpg','image.jpg'],
        "",
        "rapport_oussama_ziada"
      ),
      



    ];
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      modalDialogClass: 'dark-modal',
      windowClass: 'dark-modal',
      size: 'xl',
    });
  }
  downloadPdf(title:string) {
    const pdfUrl = `assets/projects image/${title}/${title}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
    document.body.removeChild(link);
  }

}
