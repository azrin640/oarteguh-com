export interface Serial {

   id?: string,
   serial?: string,
   market?: string,
   status?: number,
   statusText?: string,
   
   // Error
   code?: number,
   name?: string,
   writeErrors?: []
}
