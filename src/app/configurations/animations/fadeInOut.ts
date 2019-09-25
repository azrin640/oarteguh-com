import { animation, style, animate } from '@angular/animations';



export const fadeOut = animation([

   style({
      opacity: '{{ opacity }}'
   }),
   animate('{{ time }}')

])