import React from 'react'
import { View, Text,StyleSheet, Dimensions} from 'react-native'

export default class Mdd extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <View style={viewStyle.view}>
        <Text>123</Text>
      </View>
    )
  }

}

const viewStyle = StyleSheet.create({
  view:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    flex:1
  }
})