let posts = [ 
   { post: { category: 'D' }},
   { post: { category: 'A' }},
   { post: { category: 'D' }},
   { post: { category: 'E' }}
];

let reducedPosts = posts.reduce((acc, value) => {
   let exist = acc.includes(value.post.category);
   if(!exist) acc.push(value);
   return acc;
}, []);

console.log(reducedPosts);

