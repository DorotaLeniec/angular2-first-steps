import {Component} from 'angular2/core'
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
      <h3>Courses</h3> 
      {{title}}
      <ul>
      <li *ngFor='#course of courses'>
      {{ course }}
      
</li>
</ul>
`,
    providers: [CourseService]
})

export class CoursesComponent {
    title = 'moj tytuł (interpolation - one way binding)';
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}