let posts = [ 
   { post: { category: 'A' }},
   { post: { category: 'A' }},
   { post: { category: 'B' }},
   { post: { category: 'A' }}
];

let reducedPosts = posts.reduce((acc, value) => {
   

   acc = value;
   return acc;
});

console.log(reducedPosts);

