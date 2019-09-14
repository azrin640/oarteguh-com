var posts = [ 
   { post: { category: 'D' }},
   { post: { category: 'A' }},
   { post: { category: 'D' }},
   { post: { category: 'E' }}
];
var ctgs = [];
let rP = posts
   .reduce((acc, value) => {
      acc.push({ 
         category: value.post.category, 
         posts: [value]
      });
      return acc;
   }, []);

   // .map((obj) => {
   //    let exist = posts.includes(obj);
   //    // console.log(exist);
   //    if(!exist){
   //       ctgs.push(obj);
   //    }
   //    return ctgs;
   // })





console.log(rP);

   // .reduce((acc, value) => {
   //    let exist = acc.includes(value.post.category);      
   //    if(!exist) ctgs.push(value.post.category);

   //    let p = ctgs.reduce((acc2, val2) => {
   //       if(value.post.category === val2){
   //          acc2.push(value);
   //       } 
   //       return acc2;
   //    }, []);

   //    acc.push(p);
   //    return acc;
   // }, [] );



