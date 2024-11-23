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
          'Data collection, cleaning, and preparation.',
          'Trend analysis of various meteorological and hydrological parameters in India using historical data. ',
          'Development of predictive models to estimate meteorological parameters using machine learning techniques.'
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
          'Data analysis of Tunisian university results and implementation of an interactive skills dashboard.'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Computer Science.'
        ]
      )
      
    ];
  }
}
