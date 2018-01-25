import React from 'react'
import { TouchableWithoutFeedback,Text,Image,View } from 'react-native'


const goWebView =(props)=>{
  return false
}


const Title = ({
   style,
   obj
}) => (
  <TouchableWithoutFeedback style={style.viewBox} onPress={ ()=>goWebView(obj.link) }>
    <View style={style.viewBox}>
      <Text style={style.title}>{obj.title}</Text>
      <Text style={style.detail}>{obj.detail}</Text>
      {
        obj.link!='' && <Image style={style.arrow}
                               source={require('.././images/rightarrow.png')}/>
      }
    </View>
  </TouchableWithoutFeedback>
);


Title.defaultProps = {
  style:{
    viewBox:{
      height:75,
      marginLeft:20
    },
    title:{
      fontSize:19,
      fontWeight:'bold',
      color:'#333',
      marginTop:19
    },
    detail:{
      fontSize:12,
      color:"#999",
      marginTop:5
    },
    arrow:{
      height:14,
      width:14,
      position:'absolute',
      top:31,
      right:20
    }
  },
  obj:{title:'',link:'',detail:''}
};
export default Title