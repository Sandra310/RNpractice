import React from 'react'
import { Text,Image, Dimensions, View } from 'react-native'
import { Carousel } from 'antd-mobile';

const Find = ({
    style,
    obj
}) => {
  let content =
    <View style={style.viewBox}>
      <Image style={style.image}
             source={require('.././images/find.png')}/>
      <Carousel
        vertical
        infinite={true}
        dots={false}
        dragging={false}
        autoplay
        easing={'linear'}
        style={style.carousel}
      >
        <View style={style.textBox}><Text numberOfLines={1} ellipsizeMode="tail" style={style.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={style.textBox}><Text numberOfLines={1} ellipsizeMode="tail" style={style.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={style.textBox}><Text numberOfLines={1} ellipsizeMode="tail" style={style.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
      </Carousel>
    </View>
  return content
}


Find.defaultProps = {
  style:{
    viewBox:{
      height:50,
      flexDirection:'row'
    },
    image:{
      width:73,
      height:18,
      marginTop:16,
      marginLeft:20
    },
    carousel:{
      marginLeft:10,
      width:Dimensions.get('window').width-123,
      height:18,
    },
    textBox:{
      height:50
    },
    text:{
      fontSize:14,
      color:'#666',
      lineHeight:47,
      overflow:'hidden'
    }
  },
  obj:[]
};
export default Find