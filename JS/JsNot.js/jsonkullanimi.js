 const post = {
    id:1,
    titlr: 'post one',
    body: 'this is the body',
 };

 //convert to JSON string
 const str = JSON.stringify(post);
 console.log(str);

 //parse JSON
 const obj = JSON.parse(str);
 console.log(obj);

 
 const posts = [
    {
    id:1,
    titlr: 'post one',
    body: 'this is the body',
    },
    {
        id:2,
        titlr: 'post two',
        body: 'this is the body',
    },
 ];

 const str2 = JSON.stringify(posts);
 console.log(str2);