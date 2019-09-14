import { productionErrors } from "./server/handlers/errorHandlers";

db.createRole(
   {
     role: "admin",
     privileges: [
       { resource: { cluster: true }, actions: [ "killop", "inprog" ] },
       { resource: { db: "", collection: "" }, actions: [ "killCursors" ] }
     ],
     roles: []
   }
)

db.changeUserPassword("admin", "Engine6776")
db.auth("admin", "Engine6776")

db.createUser({user: "azrin", pwd: "Engine6776", roles: [{ role: "dbOwner", db: "strong-arrow"}]})

//use products 
db.getRole("dbAdmin", {"showPrivileges": true});

db.grantRolesToUser(
   "azrin",
   [
     { role: "dbOwner", db: "strong-arrow" }
   ]
)