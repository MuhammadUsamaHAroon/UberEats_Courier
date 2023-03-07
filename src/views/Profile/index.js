import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataStore, Auth } from "aws-amplify";
import { useAuthContext } from "../../Context/AuthContext";
import { Courier, TransportationMode } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Profile() {
  const { sub, setDbCourier, dbCourier } = useAuthContext();
  const [name, setName] = useState(dbCourier?.name || "Name");
  const [transportationModes, setTransPortationModes] = useState(
    TransportationMode.DRIVING
  );
  console.log("profileDub-->", sub);

  const navigation = useNavigation();

  const onSave = async () => {
    if (dbCourier) {
      await updateCourier();
    } else {
      await createCourier();
    }
    // navigation.goBack();
  };

  const updateCourier = async () => {
    try {
      const courier = await DataStore.save(
        Courier.copyOf(dbCourier, (updated) => {
          updated.name = name;
          updated.transportationMode = transportationModes;
        })
      );
      setDbCourier(courier);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  const createCourier = async () => {
    console.log("hahaha");
    try {
      const res = await DataStore.save(
        new Courier({
          name,
          sub,
          lat: 0.45,
          lng: 0.29,
          transportationModes,
        })
      );
      console.log("PROFILECOURIER-->", res);
      setDbCourier(res);
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setTransPortationModes(TransportationMode.BICYCLING)}
          activeOpacity={0.7}
          style={{
            margin: 10,
            padding: 10,
            backgroundColor:
              transportationModes === TransportationMode.BICYCLING
                ? "#000"
                : "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            width: 70,
            height: 65,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="motorcycle"
            size={39}
            color={
              transportationModes === TransportationMode.BICYCLING
                ? "#fff"
                : "#000"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTransPortationModes(TransportationMode.DRIVING)}
          activeOpacity={0.6}
          style={{
            margin: 10,
            padding: 10,
            backgroundColor:
              transportationModes === TransportationMode.DRIVING
                ? "#000"
                : "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            width: 70,
            height: 65,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="car"
            size={40}
            color={
              transportationModes === TransportationMode.DRIVING
                ? "#fff"
                : "#000"
            }
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={onSave}>
        <Text style={styles.btn_text}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Auth.signOut()}
        style={styles.btn}
        activeOpacity={0.7}
      >
        <Text style={styles.btn_text}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  btn: {
    padding: 15,
    backgroundColor: "#000",
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  btn_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
  // signOut_btn:{
  //   padding:15,
  //   backgroundColor:'#000',
  //   margin:10,
  //   marginLeft:10,
  //   marginRight:10,
  //   borderRadius:5
  // },
  // signOut_text:{
  //   color:'#fff',
  //   fontSize:18,
  //   fontWeight:'700',
  //   textAlign:'center'
  // }
});
