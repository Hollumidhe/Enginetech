// main 

module.exports.home = function(req, res){
    res.render('index', { title: 'MEAN STACK AGENCY' });
}

module.exports.about = function(req, res){
    res.render('about');
}

module.exports.services = function(req, res){
    res.render('services');
} 

module.exports.contact = function(req, res){
    res.render('contact');
}

module.exports.login = function(req, res){
    res.render('login');
}

module.exports.register = function(req, res){
    res.render('register');
}