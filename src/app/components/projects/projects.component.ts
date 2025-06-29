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
        'Industrial AI Agent',
        'AI',
        'Deep Learning, LLMs, RAG (Retrieval-Augmented Generation), Multimodal Retrieval, Model Context Protocol (MCP), AWS (EC2, ECS, Lambda, S3, SageMaker)',
        '2025',
        '',
        'A project aimed at developing a scalable, multimodal Retrieval-Augmented Generation (RAG) system to assist engineers in real-time decision-making. The system integrated both structured and unstructured data sources—such as industrial diagrams, technical documents, and textual inputs—enhanced by large language models (LLMs). It featured autonomous agents capable of contextual reasoning and task automation, powered by the Model Context Protocol (MCP). These agents orchestrated intelligent workflows for knowledge retrieval and process optimization. The entire solution was deployed end-to-end on AWS using services such as EC2, ECS, Lambda, S3, SageMaker, and API Gateway, ensuring high availability and low latency. The project also contributed to the company’s internal AI infrastructure by developing reusable components for LLM-based pipelines.',
        ['thumbnail.jpg'],
        "",
      ),

           new project(
        'Graph transformers',
        'AI',
        'Deep learning, Graph-ml, Graph theory, Image processing, Python, TensorFlow, PyTorch, Transformers, CNN',
        '2024',
        'https://github.com/oussamaziada/graph-transformers',
        'A project focused on applying Graph Transformers to human embryo classification, exploring the extension of transformer networks to graphs for machine learning.',
        ['thumbnail.jpg','image 1.jpg','image 2.png','image 3.png'],
        "",
        "Rapport_PFA.pdf"
        
      ),
      new project(
        'Data-Driven Models for Rainfall and River Water Level Forecasting',
        'AI',
        'deep learning, Time-series analysis, Python, Pandas, TensorFlow, Data visualization, Project management',
        '2024',
        '',
        'Collected, cleaned, and prepared data for trend analysis of meteorological and hydrological parameters in India, and developed predictive models to estimate these parameters using machine learning techniques.',
        ['thumbnail.jpg'],
        "",
        "Internship report"
        
      ),
      
      new project(
        'Image Anomaly Detection',
        'AI',
        'Deep learning,Auto-encoders, Image processing, Python, PyTorch,',
        '2024',
        'https://github.com/oussamaziada/AnomalyDetection',
        "Developed a project with the objective of automating the identification of cloud in satellite images. Achieved accurate predictions through the analysis of input images, employing an autoencoder architecture in the process.",
        ['thumbnail.jpg',],      
        'https://drive.google.com/file/d/1S_6Dw238xLlE169W4A6J9AQHnH71fkmc/preview',
        "Image Anomaly Detection"

        
      ),
      
      new project(
        'Club Hub',
        'Web Dev',
        'Nest JS',
        '2024',
        'https://github.com/oussamaziada/clubs-hub-master',
        ' Development of a website facilitating student engagement by providing a space for inter-club coordination, idea sharing, and event participation. As part of a team of three, my task was to design the back-end of this website using NestJS ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg','image 7.jpg'],
        "",
        "ClubHub"

        
      ),
      new project(
        'YOLOv8-animal pose estimation',
        'AI',
        'Yolo V8m',
        '2024',
        'https://github.com/MedSalimBenOmrane/YOLOv8-animal-pose-estimation',
        'Fine-tuned a YOLOv8m-pose model, pre-trained for human pose estimation, for animal pose estimation using the MacaquePose dataset. This aims to enhance pose detection accuracy in animals.',
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
        ['thumbnail.jpg','image 1.png','image 2.png'],
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
