const hapi = require('hapi');
const mongoose = require('mongoose');
const creds = require('./creds')
const Driver = require('./models/drivers');

mongoose.connect(creds.login)

mongoose.connection.once('open', () => {
  console.log('connected to Mongoose database');
})

const server = hapi.server({
    port: 1111,
    host: 'localhost'
});

const init = async () => {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
          return `<h1>George's Modern api</h1>`
        }
      },
      {
        method: 'GET',
        path: '/api/v1/ridemarfa/drivers',
        handler: (request, reply) => {
          return Driver.find();
        }
      },
      {
        method: 'POST',
        path: '/api/v1/ridemarfa/drivers',
        handler: (request, reply) => {

          const { name, phone, email, email2, vehicle, address, city, state, zip } = request.payload;

          const driver = new Driver({
            name, phone, email, email2, vehicle, address, city, state, zip
          });
          console.log('driver', driver)
          return driver.save();

        }
      }
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
};

init();