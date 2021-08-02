const {readFile, writeFile} = require('fs')

console.log('Started A first Task');
// CHECK FILE PATH!!!!
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed First Task');
});
console.log('Starting Next Task');