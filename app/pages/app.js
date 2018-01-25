import React from 'react'
import { View,ScrollView, Text,StyleSheet,Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import { TabBar } from 'antd-mobile';
import HomePage from './homepage'
import webview from './webview'
import Mdd from './mddpage'



export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      value: [],
      selectedTab:'home'
    }
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  homeView = ()=>{
    let content = <View>
      <HomePage></HomePage>
    </View>
    return content
  }

  mddView = ()=>{
    let content = <Mdd></Mdd>
    return content
  }

  findView = ()=>{
    let content = <View>
      <Text>findView</Text>
    </View>
    return content
  }

  visaView = ()=>{
    let content = <View>
      <Text>visaView</Text>
    </View>
    return content
  }

  myView = ()=>{
    let content = <View>
      <Text>myView</Text>
    </View>
    return content
  }

  render(){
    var aaa = this.state.value
    //alert(Object.prototype.toString.call(aaa))
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={tabStyles.selectedText}
          titleStyle={tabStyles.text}
          title="首页"
          renderIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconfirst.png')} />}
          renderSelectedIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconfirstactive.png')} />}
          //badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {this.homeView()}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mdd'}
          selectedTitleStyle={tabStyles.selectedText}
          titleStyle={tabStyles.text}
          title="目的地"
          renderIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconsecond.png')} />}
          renderSelectedIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconsecondactive.png')} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'mdd' })}>
          {this.mddView()}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          selectedTitleStyle={tabStyles.selectedText}
          titleStyle={tabStyles.text}
          title="发现"
          renderIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconthird.png')} />}
          renderSelectedIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconthirdactive.png')} />}
          onPress={() => this.setState({ selectedTab: 'find' })}>
          {this.findView()}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'visa'}
          selectedTitleStyle={tabStyles.selectedText}
          titleStyle={tabStyles.text}
          title="签证大厅"
          renderIcon={() => <Image style={{height:21, width:24}} source={require('.././images/iconforth.png')} />}
          renderSelectedIcon={() => <Image style={{height:21, width:24}} source={require('.././images/iconforthactive.png')} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'visa' })}>
          {this.visaView()}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'my'}
          selectedTitleStyle={tabStyles.selectedText}
          titleStyle={tabStyles.text}
          title="我的"
          renderIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconfifth.png')} />}
          renderSelectedIcon={() => <Image style={tabStyles.tabIcon} source={require('.././images/iconfifthactive.png')} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'my' })}>
          {this.myView()}
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

var tabStyles = StyleSheet.create({
  viewBox:{
    height:149,
    backgroundColor:'pink'
  },
  tabIcon:{
    height:21,
    width:21
  },
  selectedText:{
    color: "#FF5523",
    paddingBottom:4
  },
  text:{
    color:'#565960',
    paddingBottom:4
  }
})