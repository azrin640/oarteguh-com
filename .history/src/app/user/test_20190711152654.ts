let posts = [ 
   { post: { category: 'D' }},
   { post: { category: 'A' }},
   { post: { category: 'D' }},
   { post: { category: 'E' }}
];

let reducedPosts = posts.reduce((acc, value) => {
   

   acc.push(value);
   return acc;
}, []);

console.log(reducedPosts);

