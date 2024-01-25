const graphql = require("graphql");

const country = require("./countryData.json");
const { GraphQLObjectType, GraphQLList } = graphql;

let CountryType = new GraphQLObjectType({
  name: "CountryType",
  fields: () => ({

     id: { type: graphql.GraphQLInt },
     name: { type: graphql.GraphQLString },
     population: { type: graphql.GraphQLFloat },
     land_area: { type: graphql.GraphQLFloat },
     density: { type: graphql.GraphQLFloat },
     capital: { type: graphql.GraphQLString },
     currency: { type: graphql.GraphQLString },
     flag: { type: graphql.GraphQLString },
  }),
});

let Query = {
  getCountry: {
    type: new GraphQLList(CountryType),
    args: { id: { type: graphql.GraphQLInt}},
    resolve: (resolver, args) => {
     if (args.id === undefined){

        return country.countries
    }else {
        let data = country.countries.filter(
            (value) => value.id === Number(args.id)
        );
        return data;
    }
  },
}
}



module.exports = Query;