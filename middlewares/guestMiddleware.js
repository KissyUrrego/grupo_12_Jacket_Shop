function guestMiddleware(req, res, next){
    if (req.session.usuarioLogueado){
        return res.redirect('/user/userProfile');
    } 
    next();
}

module.exports = guestMiddleware;

//Pendiente implementación en el método