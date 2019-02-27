const express = require('express')
const expressGraphQL = require('express-graphql')
const graphqlSchema = require('./graphql/schema')

const app = express()

app.use('/graphql', expressGraphQL({
	graphiql: true
}))

app.listen('4000', () => {
	console.log('listening')
})
