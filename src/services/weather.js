import { client } from "./graphqlClient"
import { gql } from "graphql-request"

export const getWeather = async (currentCity, unit) => {
  const query = gql`
    query GetCityByName($name: String!, $metric: Unit) {
      getCityByName(name: $name, config: { units: $metric }) {
        weather {
          temperature {
            actual
            min
            max
            feelsLike
          }
          summary {
            description
            icon
            title
          }
          wind {
            speed
            deg
          }
          clouds {
            all
            visibility
            humidity
          }
          timestamp
        }
      }
    }
  `

  try {
    const weatherReport = await client.request(query, { name: currentCity, metric: unit })
    return weatherReport
  } catch (error) {
    throw error
  }
}
