import { animation, query, style, stagger, animate } from "@angular/animations";

export const xEnter = animation([
   query('.x-enter', [
      style({ 
         opacity: 0.3,
         transform: 'translateX(-100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.39,-0.41,0,1)', style({ opacity: 1, transform: 'none' }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('xEnter', [
         transition(':enter', [
            useAnimation(xEnter)
   ]) ]) ]
*/

export const yEnter = animation([
   query('.y-enter', [
      style({ 
         opacity: 0.3,
         transform: 'translateY(-100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.55,-0.64,.24,2)', style({ opacity: 1, transform: 'rotate(-10deg)' }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('yEnter', [
         transition(':enter', [
            useAnimation(yEnter)
   ]) ]) ]
*/

export const leftEnter = animation([
   query('.left-enter', [
      style({ 
         opacity: 0.5,
         transform: 'translateX(400px)'
      }),
      stagger(30, [
         animate('5.0s cubic-bezier(.55,-0.64,.24,2)', style({ opacity: 1 }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('leftEnter', [
         transition(':enter', [
            useAnimation(leftEnter)
   ]) ]) ]
*/

export const imageEnter = animation([
   query('.image-enter', [
      style({ 
         opacity: 0.3
      }),
      stagger(-30, [
         animate('1.0s cubic-bezier(.03,.79,.9,.38)', 
         style({ 
            opacity: 1, 
            transform: 'scaleX(1.2)'
         }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('imageEnter', [
         transition(':enter', [            
            useAnimation(imageEnter)
   ]) ]) ]
*/

export const imageEnterDrop = animation([
   query('.image-enter-drop', [
      style({ 
         opacity: 0.3
      }),
      stagger(-30, [
         animate('1.5s cubic-bezier(.31,-0.91,0,1.31)', 
         style({ 
            opacity: 1, 
            'transform': 'translateY(10px)'
         }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('imageEnter', [
         transition(':enter', [            
            useAnimation(imageEnter)
   ]) ]) ]
*/

export const imageLeave = animation([
   query('.image-enter-leave', [
      style({ 
         opacity: 0.3
      }),
      stagger(-30, [
         animate('2s cubic-bezier(.03,.79,.9,.38)', 
         style({ 
            opacity: 1, 
            transform: 'none'
         }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   trigger('imageEnter', [
         transition(':enter', [            
            useAnimation(imageEnter)
      ]) ]) ]
*/


export const iconButtonEnter = animation([
   query('.y-icon-enter', [
      style({ 
         opacity: 0.3,
         transform: 'translateY(50px)'
      }),
      stagger(-30, [
         
         animate('2.5s cubic-bezier(.18,-0.47,.39,1.36)', style({ 
            opacity: 1, 
            transform: 'none' 
         }))
      ])
   ], { optional: true }),
   query('.x-button-enter', [
      style({
         opacity: 0.9,
         transform: 'scale(0.9, 0.9)',
         'background-color': '#fb002d'
      }),
      stagger(-30, [         
         animate('2.5s cubic-bezier(.18,-0.47,.39,1.36)', style({ 
            opacity: 1, 
            transform: 'none'            
         }))
      ])

   ])
])      //

/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/

export const primaryButtonClick = animation([
   query('.x-button-click', [
      style({
         opacity: 0.9,
         transform: 'scale(0.9, 0.9)',
         'background-color': '#fb002d'
      }),
      stagger(-30, [         
         animate('2.5s cubic-bezier(.18,-0.47,.39,1.36)', style({ 
            opacity: 1, 
            transform: 'none'            
         }))
      ])

   ])
])      //

/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/

export const xMouseEnter = animation([
   query('.x-mouse-enter', [
      style({ 
         opacity: 0.3,
         transform: 'translateX(-100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.55,-0.64,.24,2)', style({ opacity: 1, transform: 'none' }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('iconButtonEnter', [
         transition(':enter', [            
            useAnimation(iconButtonEnter)
   ]) ]) ]
*/

export const banner1Enter = animation([
   query('.banner1-enter', [
      style({ 
         opacity: 0.3,
         transform: 'translateX(-100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.39,-0.41,0,1)', style({ opacity: 1, transform: 'none' }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
   ]) ]) ]
*/

export const banner2Enter = animation([
   query('.banner2-enter', [
      style({ 
         opacity: 0,
         transform: 'translateX(100px)'
      }),
      stagger(-30, [
         animate('2.5s cubic-bezier(.12,.82,.93,.53)', style({ opacity: 1, transform: 'none' }))
      ])
   ], { optional: true }
)])      //

/*   Usage  *
   animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
   ]) ]) ]
*/