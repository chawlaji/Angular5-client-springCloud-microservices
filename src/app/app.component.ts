import { Component } from '@angular/core';
import { 
  trigger, 
  style, 
  transition, 
  state, 
  animate, 
  keyframes, 
  query, 
  stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('runArrow',[
      state('startPoint', style({
        transform: 'translateX(0)'
      })),
      transition('startPoint => begin', animate(6000, keyframes([
        style({
          transform: 'translateX(80px)',
          offset: 0.2
        }),
        style({
          'left': '432px',
          'top': '249px',
          offset: 0.21
        }),
        style({
          transform: 'translateX(40px)',
          offset: 1
        })
      ])))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state = 'startPoint';

  animateArrow(animateOn: string){
    this.state == 'startPoint' ? this.state = 'begin' : this.state = 'startPoint';
  }
}
