const controller = {};
var billetes = [];
controller.listAll = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Vuelo', function (err, vuelos) {
            res.send({vuelos: vuelos})
        })
    })
};

controller.addNewFly = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('INSERT INTO Vuelo (Origen,Destino,HoraSalida,HoraLlegada, idAvion) VALUES(?,?,?,?,?)', [req.body.salida, req.body.destino, req.body.fecha_salida, req.body.fecha_llegada, req.body.idAvion], function (err, correct) {
            if (err) throw err;
            conn.query('SELECT MAX(idVuelo) as paco FROM Vuelo', function (err, idVueloMax) {
                for (var i = 0; i < req.body.asientos; i++) {
                    conn.query('INSERT INTO Billete (FechaSalida, FechaLlegada, Asiento, Precio, idVuelo) VALUES(?,?,?,?,?)', [req.body.fecha_salida, req.body.fecha_llegada, i, req.body.precio, idVueloMax[0].paco], function (err, correct) {
                    })
                }
                res.send({status: true})
            })

        })
    })
};

controller.searchFlies = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Vuelo WHERE Origen = ? AND Destino = ?  AND HoraSalida = ?', [req.body.salida, req.body.destino, req.body.fecha_salida], function (err, vuelos) {
            res.send({
                vuelos: vuelos
            })

        })
    })
};
controller.getAllNow = function (req, res) {
    req.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM Vuelo WHERE HoraSalida > ?', [req.body.fecha], function (err, vuelos) {

            res.send({
                vuelos: vuelos
            })
        })
    })

}

module.exports = controller;