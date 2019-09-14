import { animation, trigger, transition, query, style, stagger, animate } from "@angular/animations";

export const xEnter = animation([
   query('.animation-xenter', [
      style({ 
         opacity: 0.1,
         transform: 'translateX(-100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.55,-0.64,.24,2)', style({ opacity: 1, transform: 'none' }))
      ])
   ], { optional: true }
)])      //