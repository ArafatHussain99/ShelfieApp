import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer/>
    </ThemedView>
    
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    }
})