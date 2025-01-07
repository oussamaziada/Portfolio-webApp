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
        'Data Science Intern - Karunya Institute Of Technology, India ',
        'July 2024 - September 2024',
        [
          'Cleaned and prepared over 7.3K records of time-series data, ensuring a robust dataset for analysis',
          'Conducted trend analysis to identify critical patterns in climate data, directly contributing to agriculture and disaster prevention initiatives.',
          'Development of predictive models to estimate meteorological parameters using deep learning techniques outperforming existing models by 10%.'
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
        'Data Analysis Intern - KPI Associates, Tunis',
        'Juin 2024- August 2024',
        [
          'Conducted data analysis on 100K+ records, uncovering key insights for policy recommendations.',
          'Built an interactive Power BI dashboard summarizing academic performance trends across Tunisian universities.'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Mathematics.'
        ]
      )
      
    ];
  }
}
