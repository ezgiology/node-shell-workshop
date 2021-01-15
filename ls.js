
const fs = require('fs');


  process.stdout.write("prompt > ");
  const pwd = process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') { fs.readdir('./', 'utf8', (err,files)=> {
    
        if (err) {
            throw err
        } else{
            process.stdout.write(files.join('\n'))
            process.stdout.write("prompt > ");
        }
    
    }   
    )
    }
}
  

    module.exports = {
        fs
      };
    
  