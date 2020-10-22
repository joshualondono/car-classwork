
const router = require('express').Router();
const Car = require('./models/Cars');

router.post('/add-car', (req, res) => {
    Car.findOne({ car: req.body.car })
      .then((foundCar) => {
        if (foundCar) {
          return res.send('Car Already Exists');
        } else {
          if (!req.body.name || !req.body.type) {
            return res.send('All Inputs Must Be Filled');
          }
  
          let newCar = new Car({
            name: req.body.name,
            type: req.body.type,
            date: req.body.date,
          });
  
          newCar
            .save()
            .then(() => {
              return res.redirect('/cars/get-cars');
              // return res.status(200).json({ carCreated });
            })
            .catch((err) => {
              return res.status(400).json({ message: 'Car Not Created', err });
            });
        }
      })
      .catch((err) => {
        return res.status(500).json({ message: 'Server Error', err });
      });
  });

//   router.get('/get-cars', (req, res) => {
//    Car.find()
//       .then((foundCars) => {
//         return res.render('index', { carsList: foundCars });
//       })
//       .catch((err) => res.json({ err }));
//   });

//   router.get('/', (req, res) => {
//     return res.render('index');
//   });

  module.exports = router;