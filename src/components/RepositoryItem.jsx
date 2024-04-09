import { View, Text } from "react-native"

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Id: {item.id}</Text>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks count: {item.forksCount}</Text>
      <Text>Stargazers count: {item.stargazersCount}</Text>
      <Text>Rating average: {item.ratingAverage}</Text>
      <Text>Review count: {item.reviewCount}</Text>
    </View>
  )
}

export default RepositoryItem