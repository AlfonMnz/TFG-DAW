const sha1 = require('sha1');
const controller = {};
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'airhockeysl@gmail.com',
        pass: 'airhockey1'
    }
});
//peticiones básicas

controller.listAll = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Usuarios', function (err, usuarios) {

            res.send({status: true, usuarios: usuarios})
        })
    })
};

controller.listOne = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('SELECT  * FROM Usuarios WHERE email = ? AND password = ? LIMIT 1', [req.body.email, req.body.password], function (err, usuario) {
            if (usuario.length)
                res.send({status: true, usuario: usuario[0]});
            else
                res.send({status: false})
        })
    })
};

controller.getOne = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('SELECT * FROM Usuarios WHERE idUsuario = ? LIMIT 1', [req.body.idUsuario], function (err, usuario) {

            if (err) throw err;
            res.send({
                status: true,
                usuario: usuario[0]
            })

        })
    })
}

controller.editAccount = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('SELECT * FROM Usuarios WHERE email = ?', [req.body.email], function (err, usuarios) {

            if (usuarios.length > 1) {
                res.send({
                    status: false
                })
            } else {
                conn.query('UPDATE Usuarios SET nombreUsuario = ?, password = ?, email = ?, supervisor = ? WHERE idUsuario = ?', [req.body.username, req.body.password, req.body.email, req.body.supervisor, req.body.idUsuario], function (err, corr) {
                    if (err) throw err;
                    res.send({
                        status: true
                    })
                })
            }
        })
    })
}

controller.contactForm = function (req, res) {
    const mailOptions = {
        from: "AirHockey <alfonmusan@gmail.com>",
        to: "airhockeysl@gmail.com",
        subject: req.body.asunto,
        html: '<p>Hemos recibido lo siguiente a través del formulario de contacto</p>' +
        '<p>El correo del usuario es <a>' + req.body.useremail + '</p>' +
        '<p>Y a continuación el texto</p>' +
        '<p>' + req.body.textoMensaje + '</p>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        res.send({
            status: "true"
        })
    })
};

controller.insertUser = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Usuarios WHERE email = ?', [req.body.email], function (err, usuario) {
            if (usuario.length)
                res.send({status: false});
            else
                conn.query('INSERT INTO Usuarios (nombreUsuario, password,email,avatar,supervisor) VALUES(?,?,?,?,?)', [req.body.username, req.body.password, req.body.email, req.body.avatar, req.body.supervisor], function (err, correct) {

                    const mailOptions = {
                        from: "AirHockey <alfonmusan14@gmail.com>",
                        to: req.body.email,
                        subject: "Bienveindo a AirHockey COMPAÑERO!",
                        html: '<strong>Bienvenido a AirHockey</strong>' +
                        '<p>En airhockey somos expertos en realizar páginas webs básicamente, porque ya lo siento ' +
                        'pero viajar lo que se dice viajar... usted no va a viajar, al menos con nosotro</p>' +
                        '<br>' +
                        '<p>Pero oiga, no porque nosotros no queramos, sino porque básicamente no tenemos una gestión real ' +
                        'ni aerolineas contratadas ni nada de nada, es todo ficticio, ya me disculpa usted, solo soy un muchacho' +
                        'honrado y sencillo que intenta aprobar el proyecto final de su ciclo superior de DAW (P.D busco trabajo jeje)' +
                        'Así que mi recomendación es la siguiente: Relajese en la vida, disfrute de sus hijos/nietos y comprese' +
                        'un buen corneto, que siempre alegra la vida.</p>' +
                        '<br>' +
                        '<p>Aparte echele un vistazo bien visto a la aplicación, si usted es supervisor tendrá más cosas que observar' +
                        'si no lo es pues... tome un cupón imaginario de descuento</p>' +
                        '<br>' +
                        '<strong>Atentamente Alfonso (creador de la web)</strong>'
                    };
                    transporter.sendMail(mailOptions, function (err, info) {

                    });
                    res.send({
                        usuario: {
                            email: req.body.email,
                            nombreUsuario: req.body.username,
                            supervisor: req.body.supervisor
                        },
                        status: true
                    })
                })
        })
    })
};

module.exports = controller;