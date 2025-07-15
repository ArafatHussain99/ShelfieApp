
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedLogo from '../components/ThemedLogo';
import ThemedView from '../components/ThemedView';



export default function HomeScreen() {
  return (
    <ThemedView style={styles.container }>
      <ThemedLogo/>
      <Spacer height={20}/>
      <ThemedText style={styles.title} title='true'>The Number 1</ThemedText>
      <ThemedText >Reading List App</ThemedText>
      <Spacer/>
      <Link href="/register" style={styles.link}><ThemedText>Registration Page</ThemedText></Link>
      <Link href="/login" style={styles.link}><ThemedText>Login Page</ThemedText></Link>
            <Link href="/profile" style={styles.link}><ThemedText>Profile Page</ThemedText></Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
  },
  img:{
    marginVertical:16 ,
    height: 50,
    width: 50
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Android shadow
    elevation: 3,
  },
  link:{
    marginVertical: 10,
    borderBottomWidth:1,
  }
});
