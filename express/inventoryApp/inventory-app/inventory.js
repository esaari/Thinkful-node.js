var items = [{name: 'Couch', description: 'Ikea this is comfortable!'},
    {name: 'Laptop', description: 'Create node stuff with this!'}];

exports.list = function (req, res) {
    res.render('index', {items: items});
};