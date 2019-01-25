const controller = {};
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'airhockeysl@gmail.com',
        pass: 'airhockey1'
    }
});
controller.listAll = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Billete', function (err, billetes) {
            if (billetes.length)
                res.send({billetes: billetes})
        })
    })
};

controller.listAllFly = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Billete where idVuelo = ?', [req.body.idVuelo], function (err, billetes) {
            if (billetes.length)
                res.send({billetes: billetes})
        })
    })

};
controller.listUser = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Billete where idUsuario = ?', [req.body.idUser], function (err, billetes) {
            if (err) throw err;
            res.send({
                billetes: billetes,
                status: true

            })
        })
    })
};

controller.searchFly = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Billete WHERE idVuelo = ? AND idUsuario = 0', [req.body.idVuelo], function (err, billetes) {
            res.send({
                billetes: billetes,
                status: true
            })
        })
    })
}

controller.buyFly = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Billete WHERE idVuelo = ? AND idUsuario = 0 LIMIT 1', [req.body.idVuelo], function (err, billete) {

            conn.query('UPDATE Billete SET idUsuario = ? WHERE idBillete = ?', [req.body.idUser, billete[0].idBillete], function (err, paco) {
                if (err) throw err
                const mailOptions = {
                    from: "AirHockey <alfonmusan14@gmail.com>",
                    to: req.body.email,
                    subject: "GRACIAS POR LA COMPRA DE TU BILLETE",
                    html: '<strong>Gracias por la compra de tu billete</strong>' +
                    '<p>Muchas gracias por comprar tu billete hacia ' + billete[0].Destino + ' <strong>Seguro que te lo pasas genial!</strong>' +
                    '<p>Ya sabe usted todo lo que necesita saber, 2 horas antes para embarcar, todos los vuelos salen a las 15:00, todos</p>' +
                    '<p>Y por supuesto nada de llevar drogas ni cosas que no están bien vistas por las autoridades</p>' +
                    '<br>' +
                    '<p>Un saludito</p>'
                };
                transporter.sendMail(mailOptions, function (err, info) {

                });
                res.send({
                    status: true
                })
            })
        })


    })
}
controller.listUserNow = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('SELECT * FROM Billete WHERE idUsuario = ? and FechaSalida > ?', [req.body.idUsuario, req.body.fecha], function (err, billetes) {
            res.send({
                billetes: billetes
            })
        })
    })
}
controller.listUserLast = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('SELECT * FROM Billete WHERE idUsuario = ? and FechaSalida < ?', [req.body.idUsuario, req.body.fecha], function (err, billetes) {
            res.send({
                billetes: billetes
            })
        })
    })
}

module.exports = controller;