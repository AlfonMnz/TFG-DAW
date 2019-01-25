const controller = {};

controller.listAll = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM aerolinea', function (err, aerolineas) {
            if (aerolineas.length)
                res.send({aerolineas: aerolineas})
        })
    })
};

controller.addNewAerolinea = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('INSERT INTO aerolinea(nombreAerolinea) VALUES(?)', [req.body.nombreAerolinea], function (err, corr) {
            if (err) throw err;
            res.send({
                status: true
            })
        })
    })
};
controller.updateAerolinea = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('UPDATE aerolinea SET nombreAerolinea = ? WHERE idAerolinea = ?', [req.body.newname, req.body.idAerolinea], function (err, corr) {
            if (err) throw err;
            res.send({
                status: true
            })
        })
    })
};

module.exports = controller;