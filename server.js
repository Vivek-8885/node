// simple node js creation
// const http=require('http');

// http.createServer((req,res)=>{
//     res.write('hello');
//     console.log("Server Running");
//     res.end();
// }).listen(8080);

// working with file system
// just prionting the data of file

// const http=require('http');
// const fs=require('fs');
// http.createServer((req,res)=>{
//     fs.readFile('text.txt',(err,data)=>{
//         res.write(data);
//         res.end();
//     })    
// }).listen(8080);

// to insert the data into file.
// const http=require('http')
// const fs=require('fs');
// http.createServer((req,res)=>{
//     fs.appendFile('text.txt','this is inserted data',(err)=>{
//         if(err){
//             res.write('Error while append data');
//         }
//     })
//     fs.readFile('text.txt',(err,data)=>{
//         if(err){
//             res.write(err);
//         }
//         res.write(data);
//         res.end();
//     })
// }).listen(8080);

//deleting the file
// const http=require('http')
// const fs=require('fs');
// http.createServer((req,res)=>{
//     fs.unlink('text.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('file deleted');
//         }
//     })
//     res.end();
// }).listen(8080);

const http=require('http')
const fs=require('fs')
const url=require('url')
const adrs="http://localhost8080/example.html?year=2023&month=aug";
const q=url.parse(adrs,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

    const nodemailer=require('nodemailer')
    const transporter=nodemailer.createTransport({service:'gmail',
                    auth:{user:'vivek20241a05e1@gmail.com',pass:'Dvivek@8885'}})

    const options={
        from:'mail id',
        to: 'mail id',
        sub:'test my mail',
        text:'easily sent my data'
    }
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('email not sent properly');
        }
    })