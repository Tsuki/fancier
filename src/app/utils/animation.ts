import {animate, query, state, style, transition, trigger} from "@angular/animations";

export const postAnimation = trigger('post', [
  transition('* => 1', [
    query('#posts', style({opacity: 0, transform: 'translateY(-50px)'}),),
    query('#posts', animate('1s .5s ease-in', style({opacity: 1, transform: 'translateY(0)'})),),
  ])
]);
export const slideInOutAnimation = [
  trigger('slideInOut', [
    state('true', style({height: '*'})),
    state('false', style({height: 0})),
    transition('0 <=> 1', animate('.5s ease-in')),
  ]),
  trigger('slideInOut2', [
    state('true', style({display: 'block', overflow: 'hidden'})),
    state('false', style({display: 'none'})),
    transition('0 => 1', animate('0ms')),
    transition('1 => 0', animate('0ms 500ms ease'))
  ])
];
