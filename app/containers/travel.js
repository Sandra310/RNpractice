import React from 'react'
import { TouchableWithoutFeedback,Text,Image, Dimensions, View } from 'react-native'


const goWebView =(props)=>{
  console.log("1")
  return false
}


const Travel = ({
    style,
    obj
}) => {

  const detailitem = (props)=> {
    let list = props.map((item, index)=>
      <TouchableWithoutFeedback key={index} onPress={ ()=>goWebView() }>
        <View>
          <Text style={style.detail}>{item.LvYouDeYiJuHua}</Text>
          <View>
            <Image style={style.image}
                   source={{uri:item.ProductImageUrl}}/>
            <View style={style.logoprice}><Text style={style.pricetext}>￥{item.ProductPrice}</Text><Text style={style.text}>起</Text></View>
          </View>
          <Text style={style.proname}>{item.ProductName}</Text>
          <Text style={style.prosubname}>{item.ProductSubName}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
    return list
  }

  let length = obj.length-1 || 0

  let listItems = obj.map((item,index)=>
    <View style={style.itemBox} key={index}>
      <Image style={style.headimage}
             source={{uri:'http://images1.aoyou.com/'+item.TravelerAvatar}}
      />
      <View style={[style.contentBox,index==length?{borderWidth:0}:{}]}>
        <Text style={style.name}>{item.TravelerName}</Text>
        <Text style={style.tag}>{item.TravelerTag}</Text>
        {detailitem(item.TravelerRecommend)}
      </View>
    </View>
  )
  return (
    <View style={style.viewBox}>
      {listItems}
    </View>
  )
}


Travel.defaultProps = {
  style:{
    viewBox:{
      marginLeft:20,
      marginRight:20,
      width:Dimensions.get('window').width-40
    },
    itemBox:{
      flexDirection:'row',
      marginBottom:17
    },
    headimage:{
      height:40,
      width:40,
      borderRadius:20
    },
    contentBox:{
      marginLeft:10,
      width:Dimensions.get('window').width-90,
      paddingBottom:17,
      borderBottomColor:'#DFDFDF',
      borderWidth:1,
      borderTopColor:'#fff',
      borderRightColor:'#fff',
      borderLeftColor:'#fff'
    },
    name:{
      fontSize:17,
      color:'#333'
    },
    tag:{
      marginTop:5,
      backgroundColor:'#FF9B35',
      borderRadius:8,
      color:'#fff',
      overflow:'hidden',
      fontSize:12,
      paddingTop:2,
      paddingBottom:2,
      paddingLeft:7,
      paddingRight:7
    },
    detail:{
      marginTop:15,
      fontSize:14,
      color:'#333',
      lineHeight:19
    },
    image:{
      width:Dimensions.get('window').width-90,
      height:158,
      marginTop:15,
      borderRadius:12
    },
    proname:{
      marginTop:8,
      fontSize:16,
      color:'#333',
      lineHeight:20
    },
    prosubname:{
      marginTop:6,
      fontSize:12,
      color:'#999'
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
    text:{
      fontSize:12,
      marginTop:4,
      color:'#fff'
    }
  },
  obj:[]
};
export default Travel