const graphql = require('graphql')

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: {type: GraphQLString},
		firstName: {type: GraphQLString},
		age: {type: GraphQLInt}
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		user: {
			type: UserType,
			args: {id: {type: GraphQLString}},
			resolve(parent, args) {

			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
