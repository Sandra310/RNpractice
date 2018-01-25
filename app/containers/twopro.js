import React from 'react'
import { TouchableWithoutFeedback,Text,Image, Dimensions, View } from 'react-native'


const goWebView =(props)=>{
  console.log("1")
  return false
}


const TwoPro = ({
    style,
    obj
}) => {
  let listItems = obj.map((item,index)=>
    <TouchableWithoutFeedback key={index} onPress={ ()=>goWebView() }>
      <View style={style.itemBox}>
        <Image style={style.image}
               source = {{uri:item.ProductImageUrl+'?imageView2/1/w/162/h/109/q/90'}}/>
        <View style={style.labelBox}><Text style={style.label}>立省{item.ProductOriginalPrice-item.ProductPrice}</Text></View>
        <View style={style.price}><Text style={style.productPrice}>￥{item.ProductPrice}</Text><Text style={style.text}>起</Text><Text style={style.originPrice}>￥{item.ProductOriginalPrice}</Text></View>
        <Text style={style.name} numberOfLines={2}>{item.ProductName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
  return (
    <View style={style.viewBox}>
      {listItems}
    </View>
  )
}


TwoPro.defaultProps = {
  style:{
    viewBox:{
      flexDirection:'row',
      marginLeft:20,
      marginRight:20,
      justifyContent:'space-between',
      flexWrap:'wrap',
    },
    itemBox:{
      width:Dimensions.get('window').width * 0.43,
    },
    image:{
      width:Dimensions.get('window').width * 0.43,
      height:109,
      borderRadius:6
    },
    price:{
      marginTop:7,
      flexDirection:'row'
    },
    productPrice:{
      fontSize:17,
      color:'#FC5A3F'
    },
    originPrice:{
      fontSize:14,
      color:'#999',
      marginLeft:10,
      textDecorationLine:'line-through',
      marginTop:4
    },
    text:{
      fontSize:12,
      color:'#FC5A3F',
      marginTop:6
    },
    name:{
      fontSize:14,
      color:'#333',
      lineHeight:19,
      marginTop:5,
      marginBottom:15
    },
    labelBox:{
      backgroundColor:'#FF812F',
      position:'absolute',
      top:0,
      left:10,
      borderBottomRightRadius:5,
      borderBottomLeftRadius:5,
      overflow:'hidden'
    },
    label:{
      paddingLeft:2,
      paddingRight:2,
      paddingTop:4,
      paddingBottom:4,
      color:'#fff',
      fontSize:12,
    }
  },
  obj:[]
};
export default TwoPro