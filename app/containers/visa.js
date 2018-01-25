import React from 'react'
import { TouchableWithoutFeedback,Text,Image, Dimensions, View } from 'react-native'


const goWebView =(props)=>{
  console.log("1")
  return false
}


const Visa = ({
   style,
   obj
}) => {
    let listItems = obj.map((item,index)=>
        <TouchableWithoutFeedback  key={index} onPress={ ()=>goWebView() }>
          <View style={style.itemBox}>
            <View style={style.firstView}>
              <Image style={style.image}
                     source={{uri:item.ProductImageUrl+'?imageView2/1/w/105/h/70/q/90'}}/>
              <View style={style.mask}><Text style={style.text}>{item.ProductName}</Text></View>
            </View>
            <View style={style.lastView}>
              <Image style={style.smallImage}
                     source={{uri:item.ProductLogoImg}}/>
              <Text style={style.price}>￥{item.ProductPrice}起</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )
    return (
        <View style={style.viewBox}>
          {listItems}
        </View>
    )
}


Visa.defaultProps = {
  style:{
    viewBox:{
      flexDirection:'row',
      marginLeft:20,
      marginRight:20,
      justifyContent:'space-between',
      flexWrap:'wrap',
      marginBottom:15
    },
    itemBox:{
      height:91,
      width:Dimensions.get('window').width * 0.28,
      marginBottom:15
    },
    firstView:{
      height:70
    },
    lastView:{
      height:16,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      width:100,
      marginTop:5
    },
    image:{
      height:70,
      borderRadius:6
    },
    smallImage:{
      height:10,
      width:15
    },
    mask:{
      position:'absolute',
      height:70,
      backgroundColor:'rgba(0,0,0,.4)',
      top:0,
      left:0,
      right:0,
      borderRadius:6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:14,
      color:'#fff'
    },
    price:{
      fontSize:14,
      color:'#FC5A3F'
    }
  },
  obj:[]
};
export default Visa