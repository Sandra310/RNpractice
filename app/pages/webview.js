import React from 'react'
import { View, WebView,StyleSheet, Dimensions} from 'react-native'
export default class webview extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <View style={viewStyle.view}>
        <View style={viewStyle.block}></View>
        <WebView
          source={{uri:'https://m.aoyou.com/group.html?pid=105769&i2'}}
          onLoad={(e) => console.log('onLoad')}
          onLoadEnd={(e) => console.log('onLoadEnd')}
          onLoadStart={(e) => console.log('onLoadStart')}
          renderError={() => {
            console.log('renderError')
            return <View><Text>renderError回调了，出现错误</Text></View>
          }}
          renderLoading={() => {
            return <View><Text>这是自定义Loading...</Text></View>
          }}
        />
      </View>
    )
  }

}
/*https://www.cnblogs.com/zhengyeye/p/8036598.html 安卓物理键返回 */

const viewStyle = StyleSheet.create({
  view:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    flex:1
  },
  block:{
    backgroundColor:'white',
    height:20
  }
})