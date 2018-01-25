import React from 'react'
import { Text,Image, Dimensions, View } from 'react-native'

const Ensure = ({
    style,
    obj
}) => {
  let listInfor = ["首家上市旅行社","36年旅游积淀","透明价格权益保护","首批5A级旅行社","六钻品质标准","出游服务保障承诺"]
  let list = listInfor.map((item, index)=><View key={index} style={style.textBox}>
    <Text style={style.text}>{item}</Text>
    <Image style={style.miniImage} source={require('.././images/iconstar.png')}/>
  </View>)

  let content = <View style={style.viewBox}>
    <View style={style.imageBox}>
      <Image style={style.image}
             source={{uri:'https://pic1.aoyou.com/wap4.0/index/ward.png'}}/>
      <Text style={style.imageText}>遨游6大旅游保障</Text>
    </View>
    <View style={style.list}>{list}</View>
  </View>
  return content
}


Ensure.defaultProps = {
  style:{
    viewBox:{
      height:80,
      backgroundColor:'#F5F5F5',
      alignItems:'center'
    },
    imageBox:{
      width:150,
      height:21,
      marginTop:13
    },
    image:{
      width:150,
      height:21
    },
    imageText:{
      position:'absolute',
      fontSize:14,
      color:'#FFF',
      top:2,
      left:20,
      backgroundColor:'transparent',
      fontWeight:'bold'
    },
    list:{
      flexDirection:'row',
      width:Dimensions.get('window').width-40,
      marginLeft:20,
      flexWrap:'wrap',
      justifyContent:'space-around',
      alignItems:'flex-start',
      marginTop:2
    },
    textBox:{
      width:100
    },
    miniImage:{
      height:7,
      width:7,
      position:'absolute',
      top:7,
      left:-10
    },
    text:{
      fontSize:12,
      color:'#999',
      lineHeight:20
    }
  },
  obj:[]
};
export default Ensure