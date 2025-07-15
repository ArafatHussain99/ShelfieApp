import { StyleSheet } from 'react-native'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer/>
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer/>
    </ThemedView>
    
  )
}

export default Profile

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