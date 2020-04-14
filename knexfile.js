// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    seeds: {
      directory: './seeds/01-cars.js'
    },
    useNullAsDefault: true
  },
};
