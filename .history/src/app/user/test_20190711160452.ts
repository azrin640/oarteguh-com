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
      console.log(exist);
      if(!exist) ctgs.push(value.post.category);

      acc = ctgs;
      return acc;
   }, [] );

console.log(reducedPosts);

