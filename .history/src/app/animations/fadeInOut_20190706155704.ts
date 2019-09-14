import { animation, style, animate } from '@angular/animations';







export const fadeInOut = animation([

   style({

      opacity: '{{ opacity }}'
   }),
   animate('{{ time }}')

])