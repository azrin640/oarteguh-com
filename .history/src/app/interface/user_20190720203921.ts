export interface User {

   _id?: string,
   id?: string,
   date?: Date,

   // Private Info
   email: string,
   name?: string,
   handphone?: number,
   birthday?: Date,

   // Address Info
   address?: string,
   address2?: string,
   city?: string,
   state?: string,
   postcode?: number,
   country?: string,
   image?: string,

   // Business Info
   company?: string,

   // Authentication info
   token?: string,
   authToken?: string,
   authTokenExpire?: Date,
   
   // Administrative info
   admin?: boolean,   
   terms?: boolean,  
   authenticated?: boolean
   
}