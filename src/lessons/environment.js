console.log(require.cache);
console.log('Directory name: ', __dirname);
console.log('File name: ', __filename);
const path = require('path');
let fileName = path.basename(__filename);
console.log('Current file: ', fileName);
console.log(path.resolve('./src'));
let extension = path.extname(__filename);
console.log('Current file, has', extension, 'extension!');
let abs = path.isAbsolute(__dirname);
console.log('path.isAbsolute(', __dirname, ') -', abs);
console.log('path.isAbsolute(', 'ddvornyi\\IdeaProjects\\node.js_extrawest', ') -',
    path.isAbsolute('ddvornyi\\IdeaProjects\\node.js_extrawest'));
let file = '.gitignore';
let filePath = path.join(__dirname, file);
let pathParts = path.parse(filePath);
console.log(pathParts);
console.log('System seperator:', path.sep);
let objFormated = {
    root: 'C:\\',
    dir: 'C:\\Users\\ddvornyi\\IdeaProjects\\node.js_extrawest',
    base: 'tslint.json',
    ext: 'json',
    name: 'tslint'
};
let obj = path.format(objFormated);
console.log(obj);
console.log(process.arch);
console.log(process.argv);
console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
console.log(process.memoryUsage());