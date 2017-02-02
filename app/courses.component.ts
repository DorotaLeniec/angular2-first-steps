import {Component} from 'angular2/core'

@Component ({
    selector : 'courses',
    template : `<h3>Courses</h3> 
{{title}}`
})

export class CoursesComponent {
title = 'moj tytuł (interpolation - one way binding)'
}