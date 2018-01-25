import React from 'react'
import { TouchableWithoutFeedback,Text,Image, Dimensions, View } from 'react-native'


const goWebView =(props)=>{
  console.log("1")
  return false
}


const Theme = ({
   style,
   obj
}) => {
  const proitem = (props)=> {
    let list = props.map((item, index)=>
      <View key={index} style={style.proBox}>
        <Image style={style.proImg}
               source={{uri:item.ProductImageUrl+'?imageView2/1/w/105/h/70/q/90'}}/>
        <View style={style.right}>
          <Text style={style.titletext} numberOfLines={2}>{item.ProductName}</Text>
          <View style={{flexDirection:'row'}}><Text style={style.pricetext}>￥{item.ProductPrice}</Text><Text style={style.text}>起</Text></View>
        </View>
      </View>
    )
    return list
  }

  let listItems = obj.map((item,index)=>
    <TouchableWithoutFeedback key={index} onPress={ ()=>goWebView() }>
      <View style={style.itemBox} key={index}>
        <View style={style.topView}>
          <Image style={style.largeimage}
                 source={{uri:item.TravelerAvatar+'?imageView2/1/w/375/h/180/q/90'}}/>
          <Image style={style.mask}
                 source={require('.././images/promask.png')}/>
          <Text style={style.labeltext}>{item.TravelerName}</Text>
          <Text style={style.detailtext}>{item.TravelerTag}</Text>
        </View>
        <View>{proitem(item.TravelerRecommend)}</View>
      </View>
    </TouchableWithoutFeedback>
  )
  return (
    <View style={style.viewBox}>
      {listItems}
    </View>
  )
}


Theme.defaultProps = {
  style:{
    viewBox:{
      width:Dimensions.get('window').width
    },
    itemBox:{
      marginBottom:30,
    },
    topView:{
      width:Dimensions.get('window').width,
      height:180
    },
    largeimage:{
      width:Dimensions.get('window').width,
      height:180
    },
    mask:{
      position:'absolute',
      bottom:0,
      width:Dimensions.get('window').width,
      left:0,
      height:75,
      transform:[{rotate:'-180deg'}]
    },
    labeltext:{
      fontSize:14,
      color:"#333",
      backgroundColor:'#fff',
      borderRadius:5,
      position:'absolute',
      bottom:45,
      left:20,
      overflow:'hidden',
      paddingTop:2,
      paddingBottom:2,
      paddingLeft:7,
      paddingRight:7
    },
    detailtext:{
      fontSize:19,
      color:'#fff',
      fontWeight:'bold',
      position:'absolute',
      bottom:17,
      left:20,
      backgroundColor:'transparent'
    },
    proBox:{
      height:70,
      marginTop:15,
      marginLeft:20,
      marginRight:20,
      flexDirection:'row',
      width:Dimensions.get('window').width-40,
      overflow:'hidden'
    },
    proImg:{
      width:105,
      height:70,
      marginRight:10,
      borderRadius:5
    },
    titletext:{
      fontSize:14,
      color:'#333',
      width:Dimensions.get('window').width * 0.58
    },
    pricetext:{
      fontSize:17,
      color:'#FC5A3F',
      marginTop:16
    },
    text:{
      fontSize:12,
      color:'#FC5A3F',
      marginTop:21,
      marginLeft:2
    }
  },
  obj:[]
};
export default Theme