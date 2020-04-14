
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '1C4BJWEG4CL289093', make: 'Honda' , model: 'Civic LX' , mileage: 2000 },
        { vin: '2GTEK19K9S1585792', make: 'Toyota' , model: 'Corola' , mileage: 500, transmission: 'V6', title: "clean" },
        { vin: '1C4BJWEG4CL289023', make: 'Honda' , model: 'Civic Ex' , mileage: 105300 },
      ]);
    });
};
