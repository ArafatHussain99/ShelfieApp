import { StyleSheet, Text } from 'react-native'
import { useUser } from '../../hooks/useUser'

import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

const Profile = () => {

  const { logout, user } = useUser()

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>
        {user.email}
      </ThemedText>
      <Spacer/>
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer/>

      <ThemedButton onPress={logout}>
        <Text style={{color:'#f2f2f2'}}>Logout</Text>
      </ThemedButton>
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