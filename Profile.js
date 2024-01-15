import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
const App = () => {
  return (
<View style={styles.profile}>
<View style={styles.user}>
<Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.ag77IUhQeW_A-FQGcASMLAHaFj?w=220&h=180&c=7&r=0&o=5&pid=1.7' }}
          style={[styles.image,styles.marg]}
        />
        <Text style={[styles.marg,styles.txt]}>User</Text>
</View>

<ScrollView   contentContainerStyle={{flexGrow:1,padding:15,alignItems:'center',borderWidth:2,borderColor:'green'}}>      

<View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View>

<View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View>


<View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View>
<View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View>
<View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View><View style={styles.pf1}>
<View style={styles.spf1}>

</View>
<View style={styles.spf1}>

</View>
</View>

</ScrollView>
</View>
  );
};
const styles = StyleSheet.create({
  profile:{
height:'100%',
width:'100%',

  },
 user:{
  borderColor:'red',
  borderWidth:2,
  flexDirection:'row',
  alignItems:'center',
  marginTop:50
 },
 image:{
  height:50,
  width:50,
borderRadius:50
 },
 marg:{
marginLeft:30,
 },
 txt:{
  fontSize:20
 },
 pf:{
  width:'100%',
  alignItems:'center'
 },
 pf1:{
  borderColor:'purple',
  borderWidth:2,
  height:80,
  width:'90%',
  borderRadius:10,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-evenly',
  marginTop:10

 },
 spf1:{
height:60,
width:'40%',
borderColor:'yellow',
  borderWidth:2,
 }
});

export default App;