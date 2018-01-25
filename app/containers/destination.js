import React from 'react'
import { TouchableWithoutFeedback,Text,Image, Dimensions, View } from 'react-native'


const goWebView =(props)=>{
  console.log("1")
  return false
}


const Destination = ({
    style,
    obj
}) => {
  let listItems = obj.map((item,index)=>
    <TouchableWithoutFeedback key={index} onPress={ ()=>goWebView() }>
      <View style={style.itemBox} key={index}>
        <Text style={style.text}>{item.HotListName}</Text>
        {
          index==2 &&
          <Image style={style.image}
                 source = {require(`.././images/icon2.png`)}/>
          ||
          index==1 &&
          <Image style={style.image}
                 source = {require(`.././images/icon1.png`)}/>
          ||
          index==0 &&
          <Image style={style.image}
                 source = {require(`.././images/icon0.png`)}/>
        }
      </View>
    </TouchableWithoutFeedback>
  )
  return (
    <View style={style.viewBox}>
      {listItems}
    </View>
  )
}


Destination.defaultProps = {
  style:{
    viewBox:{
      flexDirection:'row',
      marginLeft:20,
      marginRight:20,
      justifyContent:'space-between',
      flexWrap:'wrap',
    },
    itemBox:{
      width:(Dimensions.get('window').width-40) * 0.25,
      height:44,
      position:'relative'
    },
    text:{
      textAlign:'center',
      fontSize:14,
      color:'#333',
      lineHeight:44
    },
    image:{
      height:15,
      width:15,
      position:'absolute',
      top:15,
      left:0
    }
  },
  obj:[]
};
export default Destination