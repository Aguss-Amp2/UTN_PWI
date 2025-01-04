const filesystem = require('fs') //Es un import antiguo (commonjs)

//FS es el modulo nativo de Nodejs para manipular el sistema de archivos

filesystem.writeFileSync('test.txt', 'Buendiaa', {encoding: 'utf-8'})