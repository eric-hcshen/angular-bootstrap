import { Component, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boot';
  init = {likeCount: 10, isActive: true};
  courses;
  constructor() {
    this.onLoad();
  }
  onLoad() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }
  viewMode = 'map';

  onAdd() {
    console.log('test');
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course) {
    let i = this.courses.indexOf(course);
    console.log(course);
    console.log(this.courses[i]);
    this.courses.splice(i, 1);
  }
  trackCourse(index, course) {
    //console.log(course);
    return course ? course.id : undefined;
  }
}
