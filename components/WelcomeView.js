import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme , IconButton} from 'react-native-paper';

function WelcomeView() {
  const informaitonAboutUser = useSelector((state) => state.user);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="account-circle" // Change to the desired icon name
          size={40}
          color="#003136" // Change to the desired icon color
          style={styles.icon}
        />
        <View style={styles.textContainer}>
        {/* <Text style={styles.welcomeText}>          
            Welcome, {JSON.stringify(informaitonAboutUser)}!
          </Text> */}
          <Text style={styles.welcomeText}>          
            Welcome, {informaitonAboutUser.firstname}!
          </Text>
          <Text style={styles.emailText}>
            User Id: {informaitonAboutUser.emailid}
          </Text>
        
          <Text style={styles.emailText}>
            User : {informaitonAboutUser.footeR2}
          </Text>

          <Text style={styles.emailText}>
            Mobile : {informaitonAboutUser.footeR3}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 20,
      padding: 10,
      boxShadowColor: '#000',
      boxShadowOffset: {
        width: 0,
        height: 2,
      },
      boxShadowOpacity: 0.2,
      boxShadowRadius: 4,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    icon: {
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#003136',
    },
    emailText: {
      fontSize: 14,
      fontWeight:'bold',
      marginTop: 10,
      color: '#800000',
    },
  });

export default WelcomeView;