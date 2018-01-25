import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const goWebView =(props)=>{
  return false
}

const cellContent = (data={}, type='small')=>{
  let content = <View>
    <Image style={[type=='big'?{height:88}:{height:44}]}
           source={{uri:data.BcgroundImg+'?imageView2/0/w/124/q/90'}}/>
    <Text style={[cellStyles.text,type=='big'?{transform:[{translateY:-78}]}:{transform:[{translateY:-31}]}]}>{data.Name}</Text>
  </View>
  return content
}

const Banner = ({
   style,
   obj
}) => (
  <View style={style.bannerBox}>
    <View style={style.rowBox}>
      <TouchableOpacity style={style.leftView} onPress={ ()=>goWebView(obj.link) }>
        {cellContent(obj[0],'big')}
      </TouchableOpacity>
      <View style={style.middleView}>
        <TouchableOpacity style={style.topView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[3])}
        </TouchableOpacity>
        <TouchableOpacity style={style.bottomView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[8])}
        </TouchableOpacity>
      </View>
      <View style={style.rightView}>
        <TouchableOpacity style={style.topView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[4])}
        </TouchableOpacity>
        <TouchableOpacity style={style.bottomView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[9])}
        </TouchableOpacity>
      </View>
    </View>
    <View style={style.rowBox}>
      <TouchableOpacity style={[style.leftView,{height:44}]} onPress={ ()=>goWebView(obj.link) }>
        {cellContent(obj[1])}
      </TouchableOpacity>
      <TouchableOpacity style={[style.middleView,{height:44}]} onPress={ ()=>goWebView(obj.link) }>
        {cellContent(obj[5])}
      </TouchableOpacity>
      <TouchableOpacity style={[style.rightView,{height:44}]} onPress={ ()=>goWebView(obj.link) }>
        {cellContent(obj[10])}
      </TouchableOpacity>
    </View>
    <View style={style.rowBox}>
      <TouchableOpacity style={style.leftView} onPress={ ()=>goWebView(obj.link) }>
        {cellContent(obj[2],'big')}
      </TouchableOpacity>
      <View style={style.middleView}>
        <TouchableOpacity style={style.topView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[6])}
        </TouchableOpacity>
        <TouchableOpacity style={style.bottomView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[11])}
        </TouchableOpacity>
      </View>
      <View style={style.rightView}>
        <TouchableOpacity style={style.topView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[7])}
        </TouchableOpacity>
        <TouchableOpacity style={style.bottomView} onPress={ ()=>goWebView(obj.link) }>
          {cellContent(obj[12])}
        </TouchableOpacity>
      </View>
    </View>
  </View>
);


Banner.defaultProps = {
  style:{
    bannerBox:{
      width: Dimensions.get('window').width-40,
      marginLeft:20,
      marginRight:20,
      borderRadius:5,
      overflow:'hidden',
      height:226
    },
    rowBox:{
      flexDirection:'row',
      marginBottom:2
    },
    leftView:{
      flex:248,
      height:88,
    },
    middleView:{
      flex:208,
      height:88,
      marginLeft:1,
      marginRight:1
    },
    rightView:{
      flex:210,
      height:88,
    },
    topView:{
      height:43,
      marginBottom:1,
      overflow:'hidden'
    },
    bottomView:{
      height:44,
    }
  },
  obj:{}
};

const cellStyles = StyleSheet.create({
  backImage:{
    height:44
  },
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize:17,
    alignItems:'center',
    backgroundColor:'transparent',
    transform:[{translateY:-78}]
  }
})
export default Banner