import { Component } from '@angular/core';
import { Expinfo } from 'src/app/model/exp_info';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent {
  exps: Expinfo[];
  constructor() {
    this.exps = [
      new Expinfo(
        'AI Engineer Intern - Imerys, Paris, France',
        'Mar 2025 - Sept 2025',
        [
          'Built a multimodal Retrieval-Augmented Generation (RAG) system combining LLMs with structured and unstructured data (text, industrial diagrams, technical reports) to support engineers in real-time decision-making.',
          'Developed autonomous agents capable of contextual reasoning and tool integration using the Model Context Protocol (MCP).',
          'Designed and orchestrated intelligent workflows for process optimization and industrial knowledge retrieval.',
          'Deployed scalable, end-to-end solutions on AWS (EC2, ECS, Lambda, S3, SageMaker, API Gateway) ensuring high availability and low latency.',
          'Contributed to the development of reusable components within the company’s LLM-powered infrastructure.'
        ]
      ),
      
      new Expinfo(
        'INSAT - Engineering Degree ',
        '2020-2025',
        [
          'Engineering Degree in Computer networks and telecommunications.'
        ]
      ),
      new Expinfo(
        'Data Science Intern - Karunya Institute Of Technology, India ',
        'July 2024 - September 2024',
        [
          'Cleaned and prepared over 7.3K records of time-series data, ensuring a robust dataset for analysis',
          'Conducted trend analysis to identify critical patterns in climate data, directly contributing to agriculture and disaster prevention initiatives.',
          'Development of predictive models to estimate meteorological parameters using deep learning techniques outperforming existing models by 10%.'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Mathematics.'
        ]
      ),
      new Expinfo(
        'Data Analysis Intern - KPI Associates, Tunis',
        'Juin 2024- August 2024',
        [
          'Conducted data analysis on 100K+ records, uncovering key insights for policy recommendations.',
          'Built an interactive Power BI dashboard summarizing academic performance trends across Tunisian universities.'
        ]
      ),      
    ];
  }
}
