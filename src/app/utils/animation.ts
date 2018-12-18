import {animate, query, style, transition, trigger} from "@angular/animations";

export const postAnimation = trigger('post', [
  transition('* => 1', [
    query('#posts', style({opacity: 0, transform: 'translateY(-50px)'}),),
    query('#posts', animate('1s .5s ease-in', style({opacity: 1, transform: 'translateY(0)'})),),
  ])
]);
