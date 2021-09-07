const http = require('http');
// const server = http.createServer();

const Koa = require('koa')
const {ApolloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {typeDefs, resolvers} = require('./schemas')
const PORT = 5000

// const server = new ApolloServer({
// 	schema: makeExecutableSchema({typeDefs, resolvers})
// })

// await server.start()

// const app = new Koa()
// server.applyMiddleware({app})

// app.listen({ port: PORT }, () => {
// 	console.log(`Server ready at http://localhost:${PORT + server.graphqlPath}`)
// })


async function startApolloServer(typeDefs, resolvers) {
	// Same ApolloServer initialization as before
	const server = new ApolloServer({
		schema: makeExecutableSchema({typeDefs, resolvers})
	})

	// Required logic for integrating with Express
	await server.start();

	const app = new Koa()

	app.on('error', (err, ctx) => {
		console.log('error', err);
	});

	server.applyMiddleware({app})
	// server.applyMiddleware({app, path: '/'});

  	// Modified server startup
  	// await new Promise(resolve => app.listen({ port: PORT }, resolve));
  	app.listen({ port: PORT }, () => {
		console.log(`🚀 Server ready at http://localhost:${PORT + server.graphqlPath}`)
	});

	// const result = await startServer(app, PORT);
	// console.log('result', result);
}

startApolloServer(typeDefs, resolvers);