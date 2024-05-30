import { animate, style, transition, trigger } from "@angular/animations";
export const routingAnimation = trigger('routingAnimation', [
  transition('*<=>*', [style({ opacity: 0, transform: 'translateX(30px)' }), animate('300ms', style({ opacity: 1, transform: 'translateX(0px)' }))]),
])

