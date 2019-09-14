let posts = [ 
   { post: { category: 'D' }},
   { post: { category: 'A' }},
   { post: { category: 'D' }},
   { post: { category: 'E' }}
];
var ctgs = [];
let reducedPosts = posts
   .reduce((acc, value) => {
      let exist = acc.includes(value.post.category);      
      if(!exist) ctgs.push(value.post.category);

      ctgs.reduce((acc2, val2) => {
         if(val2 === value.post.category) acc2.push(value);
         return acc2;
      }, []);

      console.log(ctgs);

      acc = ctgs;
      return acc;
   }, [] );

// console.log(reducedPosts);

