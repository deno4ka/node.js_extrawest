const express = require('express');

const port = 8080;
const app = express();
const admin = express();
const user = express();

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<a href="/admin">admin page</a>');
    res.write('<br />');
    res.write('<a href="/user">user page</a>');
    res.end();
});

admin.get('/', (req, res) => {
    console.log(admin.mountpath);
    res.send('Admin Homepage');
});

admin.on('mount', () => {
    console.log('admin was mounted');
});

user.get('/', (req, res) => {
    console.log(user.mountpath);
    res.send('User Homepage')
});

user.on('mount', () => {
    console.log('user was mounted');
});

app.use('/admin', admin);
app.use('/user', user);

app.listen(port, () => {
    console.log('app is running on port', port);
});
