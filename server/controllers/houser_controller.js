const getHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ getError: err }));
};
const addHouse = (req, res, next) => {
  const { name, address, city, state, zipcode } = req.body;
  const db = req.app.get("db");

  db.addHouse([name, address, city, state, zipcode])
    .then(house => res.status(200).send(house))
    .catch(err => res.status(500).send({ addError: err }));
};
module.exports = {
  getHouses,
  addHouse
};
