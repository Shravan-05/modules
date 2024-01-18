import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView,SafeAreaView} from 'react-native';
const Ranking = () => {
  return (
    <SafeAreaView>
    <View style={styles.rnk}>
<View style={styles.Tp3}>
<View style={styles.pts1}>
<Image
        source={{ uri: 'https://images.hdqwalls.com/wallpapers/spiderman-miles-morales-artworks-2018-jl.jpg' }}
        style={styles.imagetp1}
      />
      <View style={styles.pts11}>
<Text style={styles.rnknum}>3rd</Text>
      </View>
      </View>
      <View style={styles.pts21}>
<Image
        source={{ uri: 'https://images.hdqwalls.com/wallpapers/spiderman-miles-morales-artworks-2018-jl.jpg' }}
        style={styles.imagetp2}
      />
      <View style={styles.pts22}>
      <Text style={styles.rnknum}>1st</Text>

      </View>
      </View>
      <View style={styles.pts1}>
<Image
        source={{ uri: 'https://images.hdqwalls.com/wallpapers/spiderman-miles-morales-artworks-2018-jl.jpg' }}
        style={styles.imagetp3}
      />
      <View style={styles.pts11}>
      <Text style={styles.rnknum}>2nd</Text>

      </View>
      </View>
</View>
<View style={styles.Rmgrnk}>

</View>
    </View>
    </SafeAreaView>
  );
};
export default Ranking;
const styles = StyleSheet.create({
    rnk:{
borderColor:"red",
borderWidth:2
    },
pts1:{
    borderColor:"red",
    borderWidth:2,
    height:400,
    flexDirection:'column',
    justifyContent:'center',
    
},
pts11:{
        borderColor:"blue",
        borderWidth:2, 
        height:150,
        marginTop:10
    },
    pts21:{
        borderColor:"red",
        borderWidth:2,
        height:400,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    pts22:{
        borderColor:"blue",
        borderWidth:2, 
        height:150,
        width:100,

        marginTop:10
    },

Tp3:{
marginTop:20,
flexDirection:"row",

justifyContent:"space-evenly",
borderColor:"yellow",
borderWidth:1,
height:400
},
imagetp1:{
    height:100,
    width:100,
borderRadius:200,
marginTop:100
},
imagetp2:{
    height:120,
    width:120,
borderRadius:200
},
imagetp3:{
    height:100,
    width:100,
borderRadius:200,
marginTop:100
},
rnknum:{
    color:'black',
    textAlign:'center',
    fontSize:30,
    fontWeight:"bold"
}
});