import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { setUser } from "./app/userSlice";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { loginUser } from "./Services/apiService";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Permissions from 'expo-permissions';
//import * as Device from 'expo-device';
import { TextInput, Button, SegmentedButtons, ActivityIndicator, MD2Colors, Dialog, Portal, Title, FAB } from 'react-native-paper';


const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");   //chcbadekilepal@dpdmis.in,afu29439@dpdmis.in   Cgmsc#123$, chcgujradmt@dpdmis.in Dinesh#180278$, uphcamasivani@dpdmis.in Cgmsc#123$,chcdongargarh@dpdmis.in Cgmsc#123$
  const [password, setPassword] = useState("");    //mdcgmsc@dpdmis.in   Cgmsc#123$  7773006940
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  // const requestWifiStatePermission = async () => {
  //   const uniqueId = await Device.getUniqueID();
  //  // const uniqueId = await  Device.getPlatformFeaturesAsync();
  //   console.log('Unique device ID:', uniqueId);
  //   alert('Unique device ID:', uniqueId);
  // };


  useEffect(() => {
    setVisible(true);  

    //requestWifiStatePermission();
    // console.log('Device:', Device);
    // alert('Device:', Device);
    setTimeout(() => {
      hideDialog();
    }, 5000);
  }, []
  );

  // useEffect(() => {
  //   // Get the user from AsyncStorage
  //   const getUser = async () => {
  //     try {
  //       const userJSON = await AsyncStorage.getItem("user");
  //       if (userJSON !== null) {
  //         const user = JSON.parse(userJSON);
  //         setEmail(user.email);
  //         setPassword(user.password);
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving user:", error);
  //     }
  //   };
  //   getUser();
  // }, []);

  // const onLogin = async () => {
  //   try {
  //     const response = await fetch("http://140.238.246.250:8080/api/Login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         emailid: email,
  //         pwd: password,
  //       }),
  //     });

  const fnCloseIcon = async () => {
    hideDialog();
  }


  const navigatePublicView = async () => {
    //alert("item: "+ JSON.stringify(item));
    //alert("value: " + value );
    alert("show Public");
    //setLoading(true);
    // Perform login and fetch user info
    const userInfo = await loginUser(email, password);
    await AsyncStorage.setItem("authenticated", "true");
    dispatch(setUser(userInfo));
    // navigation.navigate("FacilityHome");
    // navigation.navigate("facilityHomePublic");
  }

  const onLogin = async () => {

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please provide both email and password.");
      return;
    }
    try {
      setLoading(true);
      // Perform login and fetch user info
      const userInfo = await loginUser(email, password);
      // alert(JSON.stringify(userInfo.response));
      // Store the user in AsyncStorage
      await AsyncStorage.setItem("authenticated", "true");
      dispatch(setUser(userInfo));
      navigation.navigate("FacilityHome");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password. Please check your credentials.");
      } else {
        setErrorMessage("An error occurred during login. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };


  const publicReportsNavigation = () => {
   // alert("Naivgate to Public Report Page");
    navigation.navigate("Public Reports");
  }


  return (

    <ImageBackground source={require("./assets/background7.jpg")}
      style={styles.backgroundImage}
    >

         <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} dismissable={true} >
          <Dialog.Title></Dialog.Title>
          <Dialog.Content>
            <View >

           
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                <Text style={styles.popupHeader} >छत्तीसगढ़ औषधि दर्पण</Text>

                <Text onPress={fnCloseIcon} style={{ alignSelf: 'center', marginTop: -40 }}><Icon name="close" size={30} color="grey" /></Text>

              </View>
              <Image
                style={styles.tinyLogo}
                source={require("./assets/CGHON1.jpg")}
              />

            </View>
          </Dialog.Content>
          <Dialog.Title></Dialog.Title>
        </Dialog>
      </Portal>
      


      <View style={[styles.containerHeader, { marginBottom: -500, marginTop: -160, }]}>
        <Text style={[styles.title, { color: '#003136', marginBottom: 2 }]}>छत्तीसगढ़</Text>
        <Text style={[styles.title, { color: '#003136', marginBottom: 2 }]}>औषधि दर्पण</Text>
        <Text style={[styles.title, { color: '#003136', fontSize: 12, paddingTop: -10000 }]}> An Initiative for Supply Chain Management  </Text>
        <Image source={require("./assets/cglogo.png")} />

      </View>

      <View style={[styles.container, { marginTop: 200 }]}>

        {errorMessage !== "" && <Text style={styles.errorText}>{errorMessage}</Text>}
        <TextInput
          mode="outlined"
          label="User Id/Mobile No"
          placeholder="User Id/Mobile No"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          left={<TextInput.Icon icon="account" />}
        />

        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          style={styles.input}
          left={<TextInput.Icon icon="key" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <Button
          mode="contained"
          buttonColor="#003136"
          textColor="#FFFFFF"
          labelStyle={styles.buttonLabel}
          onPress={onLogin}
          loading={loading}
        >
          Login
        </Button>

        {/* <Button
          mode="contained"
          buttonColor="#003136"
          textColor="#FFFFFF"
          labelStyle={styles.buttonLabel}
          onPress={navigatePublicView}
          loading={loading}
        >
          Public Report View 
        </Button> */}


        {/* <Text style={[styles.title, { color: '#800000', fontSize: 12, paddingTop: 15 }]}>Brought To You By, </Text> */}
        <View style={StyleSheet.flatten([styles.cardItemRow, { justifyContent: 'space-between', flexDirection: 'row' }])}>
          {/* <Image style={[{ width: 50, height: 50 }]} source={require("./assets/cgmsc.png")} /> */}
          <Text style={[styles.title, { color: '#003136', fontSize: 14, marginBottom: 2, marginTop: 30 }]}>  Chhattigarh Medical Services Corporation Ltd, </Text>
        </View>
        <Text style={[styles.title, { color: '#003136', fontSize: 12, paddingTop: -10 }]}> Department of Health & Familiy Welfare, Chhattisgarh </Text>
        <Text style={[styles.title, { color: '#800000', fontSize: 12, paddingTop: -50 }]}> DPDMIS Monitoring- Version: 1.0.1</Text>
        <Text style={[styles.title, { color: '#003136', fontSize: 12, paddingTop: -10 }]}> Designed & Developed by IT-Cell CGMSCL</Text>
      </View>

      <FAB
        icon="account-eye"
        style={styles.fab}
        onPress={() => { { publicReportsNavigation() } }}
        label="Public View"
      />



    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containerHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    borderColor: "#000000"
  },
  buttonLabel: {
    color: "#FFFFFF",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  logo: {
    // width: 100, 
    // height: 100, 
  },
  cardContent: {
    flexDirection: 'column',
  },
  cardItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tinyLogo: {
    width: '66%',
    height: '96%',
    alignSelf: 'center',
  },

  popupHeader: {
    // alignSelf: 'center',
    fontSize: 20,
    marginTop: -40,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#6ED3C8',
    

  },

});

export default LoginPage;













