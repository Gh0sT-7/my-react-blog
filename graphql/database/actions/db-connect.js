const knex = require('../mysql')

knex.raw('show schemas')
	.then(response => console.log(response))
