let posts = [ 
   { post: { category: 'D' }},
   { post: { category: 'A' }},
   { post: { category: 'B' }},
   { post: { category: 'A' }}
];

let reducedPosts = posts.reduce((acc, value) => {
   

   acc = value;
   return acc;
});

console.log(reducedPosts);

