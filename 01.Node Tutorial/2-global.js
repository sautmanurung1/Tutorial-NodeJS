// GLOBAL - NO WINDOW !!!!!

/* 
    __DIRNAME - path to current directory
    __FILENAME - file name
    require   - function to use module (CommonJS)
    module - Info about current module (file)
    process - Info about env where the program is being executed
*/
console.log(__dirname);
setInterval(()=>{
    console.log('Hello world');
},1000);