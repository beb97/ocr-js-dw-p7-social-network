const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

