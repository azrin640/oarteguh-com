export interface Selected {
   button?     : { id?: string, color?: string},
   element?    : { id?: string },
   start?      : number,
   end?        : number,
   type?       : string,
   length?     : number,
   content?    : string,
   ranges?     : Range[],
   newElement? : HTMLElement,
   selection?  : Selection
}
