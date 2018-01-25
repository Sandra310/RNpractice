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

  const label = (props)=> {
    props = props || []
    let labels = props.map((item, index)=>
      <Text style={style.text} key={index}>
        {item}
      </Text>
    )
    return labels
  }

  const length = obj.length-1 || 0

  let listItems = obj.map((item,index)=>
    <TouchableWithoutFeedback key={index} onPress={ ()=>goWebView() }>
      <View style={[style.proBox,index==length?{borderBottomWidth:0}:{}]} key={index}>
        <View style={style.imageBox}>
          <Image style={style.image} source={{uri:item.ProductImageUrl+'?imageView2/1/w/335/h/180/q/90'}}/>
          <Text style={style.label}>{item.ProductTag}</Text>
          <View style={style.logoprice}><Text style={style.pricetext}>￥{item.ProductPrice}</Text><Text style={style.minitext}>起</Text></View>
        </View>
        <Text style={style.title} numberOfLines={2}>{item.ProductName}</Text>
        <Text style={style.detail} numberOfLines={1}>{item.ProductSubName}</Text>
        <View style={style.tag}>
          <Text style={style.text}>4钻</Text>
          {label(item.dataLabelList)}
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


TwoPro.defaultProps = {
  style:{
    viewBox:{
      marginLeft:20,
      marginRight:20,
      width:Dimensions.get('window').width-40
    },
    itemBox:{

    },
    tabBox:{
      width:Dimensions.get('window').width-40
    },
    proList:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    proBox:{
      paddingBottom:17,
      borderBottomWidth:1,
      borderBottomColor:'#DFDFDF',
      marginTop:17
    },
    imageBox:{
      height:180
    },
    image:{
      height:180,
      width:Dimensions.get('window').width-40,
      borderRadius:12
    },
    label:{
      position:'absolute',
      top:0,
      left:10,
      fontSize:12,
      color:'#fff',
      paddingLeft:9,
      paddingRight:9,
      paddingTop:4,
      paddingBottom:4,
      backgroundColor: '#FF6602',
      borderBottomRightRadius:5,
      borderBottomLeftRadius:5,
      overflow:'hidden'
    },
    title:{
      marginTop:10,
      fontSize:16,
      color:"#333",
      lineHeight:20
    },
    detail:{
      marginTop:6,
      fontSize:12,
      color:"#999"
    },
    tag:{
      flexDirection:'row',
      marginTop:7
    },
    text:{
      fontSize:10,
      color:'#FDA403',
      paddingLeft:4,
      paddingRight:4,
      borderColor:'#FDA403',
      borderWidth:1,
      marginRight:3,
      borderRadius:2
    },
    logoprice:{
      paddingTop:2,
      paddingBottom:2,
      paddingLeft:6,
      paddingRight:8,
      backgroundColor:'#FF5647',
      borderRadius:25,
      overflow:'hidden',
      position:'absolute',
      bottom:10,
      right:10,
      flexDirection:'row'
    },
    pricetext:{
      fontSize:16,
      color:'#fff'
    },
    minitext:{
      fontSize:12,
      marginTop:4,
      color:'#fff'
    }
  },
  obj:[]
};
export default TwoPro