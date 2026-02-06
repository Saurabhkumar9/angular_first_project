import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  // Static about content
  projectInfo = {
    name: 'AngularShop',
    description: 'A mini e-commerce demo project built with Angular Standalone Components',
    features: [
      'Standalone Components Architecture',
      'Angular Router for navigation',
      'Service for centralized data management',
      'Template-driven Forms for user input',
      'Reusable Components (Navbar & Footer)',
      'Mobile-responsive design',
      'Static data without backend dependency'
    ],
    technology: 'Angular 17+ with TypeScript'
  };
}