const controller = {};

controller.listAll = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Avion', function (err, aviones) {
            if (aviones.length)
                res.send({aviones: aviones})
        })
    })
};
controller.addNewPlane = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('INSERT INTO Avion (Asientos, idAerolinea) VALUES(?,?)', [req.body.asientos, req.body.idAerolinea], function (err, corr) {
            if (err) throw err;
            res.send({status: true})
        })
    })
}

module.exports = controller;