import React from 'react'
import { View,Text,StyleSheet,Button,Image,Dimensions } from 'react-native'

export default class Header extends React.Component{
  render(){
    return (
      <View style={styles.headerbox}>
        <Image style={styles.maskImage}
               source={require('.././images/headermask.png')}/>
        <View style={styles.topView}>
          <Image style={styles.leftImage}
                 source={require('.././images/phone.png')}/>
          <Text style={styles.text}>
            北京<Image style={styles.middleImage} source={require('.././images/bottomarrow.png')}/>
          </Text>
          <Image style={styles.rightImage}
                 source={require('.././images/info.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerbox:{
    height: 64,
    position:'absolute',
    top:0,
    left:0,
    width:Dimensions.get('window').width
  },
  maskImage:{
    height:64,
    width:Dimensions.get('window').width
  },
  topView:{
    height:44,
    width:Dimensions.get('window').width,
    position:'absolute',
    top:20,
    left:0,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:12,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  leftImage:{
    height: 20,
    width: 20,
    alignItems:'flex-start'
  },
  rightImage:{
    height: 20,
    width: 20,
  },
  middleImage:{
    height: 8,
    width: 8,
    marginLeft:10,
    //transform:[{rotateX:'-180deg'}]
  },
  text:{
    fontSize:17,
    color:'white',
    backgroundColor:'transparent',
    top:2
  }
})