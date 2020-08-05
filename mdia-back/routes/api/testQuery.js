//How to query
// Inclue the knex package and config files
const Knex = require('knex');
const knexFile = require('../../knexfile');
const router = require('./farm');

// Make connection to the database
const knex = Knex(knexFile.development);

// Run queries
router.get('/', async (req, res) => {
    const test = await knex('farm').where("id >", 2).catch(err => {
        console.log(err);
        throw (err);
    });
    res.json(test);
});

