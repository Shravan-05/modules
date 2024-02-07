// App.js
import React, { cloneElement } from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, View, ScrollView, Button,Image, TextInput } from 'react-native';
const UserProfile = () => {
    return (
        <ScrollView style={styles.sv}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.topnv}>
            <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/9383/9383972.png",
          }}
          style={styles.img}
        />
          <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1827/1827933.png",
          }}
          style={styles.img}
        />
                  </View>

                  <View style={styles.udtls}>
            <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
          }}
          style={styles.pf}
        />
          <TextInput style={styles.txt1} placeholder='Username' >

          </TextInput>
          <TextInput style={styles.txt1} placeholder='Birthdate'>
            
            </TextInput>
            <TextInput style={styles.txt1} placeholder='Age'>
            
            </TextInput>
            <TextInput style={styles.txt1} placeholder='Gender'>
            
            </TextInput>
            <TextInput style={styles.txt1} placeholder='Emial-id'>
            
            </TextInput>
            <Text style={styles.cp}>Change Password ?</Text>
                  </View>



            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        marginLeft: 10,
        marginRight: 10,

    },
    sv: {
        flexGrow: 1,
    },
    img:{
        height:40,
        width:40
    },
    topnv:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    img:{
        height:40,
        width:40
    },
    udtls:{
alignItems:"center",
gap:20
    },
    pf:{
        height:100,
        width:100,
marginTop:30
    },
    txt1:{
        width:350,
        height: 50,
        borderColor:"black",
        borderWidth:3,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },cp:{
        fontSize:20,
        color:"orange"
    }
    
});
export default UserProfile;
