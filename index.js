// const file = require('fs');
// const path = require('path');
// file.writeFile(path.join(__dirname, './data.txt'), 'Group Project', err=> {
//     if (err) throw err;
//     console.log('Writing to a file');
// });
// file.readFile('./data.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// var fs = require("fs");
//     fs.readFile('abc.txt',function(err,data){//Reading file Asynchronously
//     if(!err) {
//     console.log(data);
//     }
//     });
//     console.log("something else");


// const fs = require('fs');
// const path = require('path');
// // read from file
// fs.readFile('./data.txt', 'utf8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// Write to a file / overwriting existing content
// fs.writeFile(path.join(__dirname, './data.txt'), 'content that is overwriting existing  content', err => {
//     if (err) throw err;
//     console.log('Writing to a file');
// });
// // adding new content to existing content
// fs.appendFile(path.join(__dirname, './data.txt'), ' more content appended to existing file', err => {
//     if (err) throw err;
//     console.log('adding content to file');
// });

// const file = require('fs');
// const path = require('path');
// const friends = ['Justine', 'Eden', 'Xena', 'Cassidy', 'Amanda'];

// setTimeout(()=>{
//     console.log('stop');
//     clearInterval(int);
// }, 2000);

// const int = setInterval(()=>{
//     console.log(friends);
// },1000);


// const fs = require('fs');
// // const path = require('path');
// // const express = require('express');
// const http = require('http');

//     // Create an express app
// // const app = express();
// // Create a router
// // const router = express.Router();
// // Port
// const port = 3000
// const server = http.createServer(function(req,res) {
//  res.writeHead(200, {'Content-Type': 'text/html'})
//  fs.readFile('index.html', function(error, data) {
//     if(error) {
//         res.writeHead(404)
//         res.write('Error: File Not Found')
//     } else {
//         res.write(data)
//     }
//     res.end()
//  }) 
// })

// server.listen(port, function(error) {
//   if (error)  {
//     console.log('Something went wrong', error)
//   } else {
//     console.log('Server is listening on port' + port)
//   }
// })


// Method 1
//  const express = require('express');

// const app = express();

// app.listen(3000);

// let courses = [
//     {id: 1, name: 'Software Engineering'},
//     {id: 2, name: 'Web Development'},
//     {id: 3, name: "Database Management" }
//     ];

// app.get('/', (req, res)=>{
//     res.send(JSON.stringify(courses));
// })

// app.get('/courses/:id',(req, res)=>{
//     if (req.params.id > courses.length) {
//         res.send('<h1>There is no record with this id</h1>')
//     } else {
//         res.send(JSON.stringify(courses[req.params.id - 1]));
//     }
// })



// Method 2
const express = require('express');
const app = express();
const port = parseInt(process.env.port) || 4000;
let courses = [
    {
        id: 1, name: 'Software Engineering'
    },
    {
        id: 2, name: 'Web Development'
    },
    {
        id: 3, name: "Database Management"
    }
];
app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
})
app.get('/', (req, res)=> {
    res.send(courses);
});
app.get('/courses/:id', (req, res)=> {
    const index = parseInt(req.params.id) - 1;
    if(index < courses.length) {
        res.send(courses[index]);
    }else {
        res.send('Course was not found');
    }
});




