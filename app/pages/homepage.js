import React from 'react'
import { View,Text,StyleSheet,Button,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import { Tabs } from 'antd-mobile';
import  request from '../util/request'
import FadeInView from '.././containers/animate'
import Swiper from '.././components/swiper'
import Header from '.././containers/header'
import Block from '.././containers/block'
import Title from '.././containers/title'
import Banner from '.././containers/banner'
import Visa from '.././containers/visa'
import TwoPro from '.././containers/twopro'
import Destination from "../containers/destination";
import Theme from "../containers/theme";
import Travel from "../containers/travel";
import Recommand from "../containers/recommandpro";
import Ensure from "../containers/ensure";
import Search from "../containers/search";
import Find from "../containers/find";


export default class homepage extends React.Component{
  constructor(){
    super();
    this.state = {
      value: [],
      visaData:[],
      HotData:[],
      DestinationData:[],
      ThemeData:[],
      TravelData:[],
      RecommendData:[],
      searchBoxHeight:9999,
      recommandBoxHeight:9999,
    }
  }

  componentWillMount(){
    request('http://elementmicro.aoyou.com/wap/ElementService/GetChannelInfos','POST',
      {"cityId":"1","channelTypeid":385,"type":2,"SpaceGuid":"e2581cb3-feda-495e-b3b4-081fb04b3e92"}).then((responseData)=>{
      this.setState({
        value: JSON.parse(responseData.Data)
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetVisaList','POST',
      {"cityId":"1","channelTypeid":385,"type":3,"SpaceGuid":"37ddce4a-5493-4043-ab21-9b0087e261a6"}).then((responseData)=>{
      this.setState({
        visaData: responseData.Data
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetQiangProduct','POST',
      {"cityId":"1","channelTypeid":385,"type":3,"SpaceGuid":"7a17cc9d-14b8-4083-9a02-de980b38bb2b"}).then((responseData)=>{
      this.setState({
        HotData: responseData.Data
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetHotDestination','POST',
      {"cityId":"1","channelTypeid":385,"type":3,"SpaceGuid":"46065e6f-8d7c-41fc-a662-3193ce00fff8"}).then((responseData)=>{
      this.setState({
        DestinationData: JSON.parse(responseData.Data)
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetTravelAreaProducts','POST',
      {"cityId":"1","channelTypeid":385,"type":1,"SpaceGuid":"5E411997-4F82-49CF-82CF-C87EA1A90EA0"}).then((responseData)=>{
      this.setState({
        ThemeData: JSON.parse(responseData.Data)
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetTravelAreaProducts','POST',
      {"cityId":"1","channelTypeid":385,"type":1,"SpaceGuid":"8FCE44A3-7B55-4F8A-BF66-17432979AA8D"}).then((responseData)=>{
      this.setState({
        TravelData: JSON.parse(responseData.Data)
      })
    })
    request('http://elementmicro.aoyou.com/wap/ElementService/GetTuiJianProducts','POST',
      {"cityId":"1","channelTypeid":385,"type":1,"SpaceGuid":"AA0DC65F-0F6C-4913-97FB-889AF294CAB8"}).then((responseData)=>{
      this.setState({
        RecommendData: JSON.parse(responseData.Data)
      })
    })

  }

  searchContent = (top)=>{
    let layout=(e)=>{
      if(!top){
        this.setState({searchBoxHeight:e.layout.y})
      }
    }
    let content =
      <View onLayout={({nativeEvent:e})=>layout(e)}>
        <Search istop={top}/>
      </View>
    return content
  }

  visaContent = ()=>{
    let listData = this.state.visaData.VisaProducts || []
    let titleobj = {title:this.state.visaData.VisaListTitle,link:this.state.visaData.VisaListLink,detail:this.state.visaData.VisaListInfor}
    let content = <View>
      <Block/>
      <Title obj={titleobj}/>
      <Visa obj={listData}/>
    </View>
    return content
  }

  hotContent = ()=>{
    let listData = this.state.HotData.HotProducts || []
    let titleobj = {title:this.state.HotData.HotProductTitle,link:this.state.HotData.HotProducLink,detail:this.state.HotData.HotProducInfor}
    let content = <View>
        <Block/>
        <Title obj={titleobj}/>
        <TwoPro obj={listData}/>
    </View>
    return content
  }

  destinationContent = ()=>{
    let listData = this.state.DestinationData.HotList || []
    let titleobj = {title:this.state.DestinationData.HotDestinationTitle,link:this.state.DestinationData.HotDestinationLink,detail:this.state.DestinationData.HotDestinationInfor}
    let content = <View>
      <Block/>
      <Title obj={titleobj}/>
      <Destination obj={listData}/>
    </View>
    return content
  }

  themeContent = ()=>{
    let listData = this.state.ThemeData.Traveler || []
    let titleobj = {title:this.state.ThemeData.TravelAreaTitle,link:'',detail:this.state.ThemeData.TravelAreaInfor}
    let content = <View>
      <Block/>
      <Title obj={titleobj}/>
      <Theme obj={listData}/>
    </View>
    return content
  }

  travelContent = ()=>{
    let listData = this.state.TravelData.Traveler || []
    let titleobj = {title:this.state.TravelData.TravelAreaTitle,link:'',detail:this.state.TravelData.TravelAreaInfor}
    let content = <View>
      <Block/>
      <Title obj={titleobj}/>
      <Travel obj={listData}/>
    </View>
    return content
  }

  changeTab = (e)=>{
    this.refs.tabView.goToTab(e.title)
  }

  tabContent = ()=>{
    let listData = this.state.RecommendData || []
    let tabs = []
    listData.map((item, index)=>{
      tabs.push({
        title:item.TabName
      })
    })
    let changeTab = (e)=>{
      console.log("1")
      console.log(e)
    }

    let content = <View style={{position:'absolute',top:64,width:Dimensions.get('window').width}}>
        <Tabs style={recommendStyle.tabBox}
              tabs={tabs}
              tabBarActiveTextColor='#F0643C'
              tabBarInactiveTextColor='#333'
              tabBarUnderlineStyle={{backgroundColor:'#F0643C',width:10}}
              initialPage={0}
              onChange={this.changeTab()}
        >
        </Tabs>
      </View>

    return content
  }

  recommendContent = ()=>{
    let listData = this.state.RecommendData || []
    let tabs = []
    listData.map((item, index)=>{
      tabs.push({
        title:item.TabName
      })
    })

    let listItems = listData.map((item,index)=>
      <View style={recommendStyle.proList} key={index}>
        <Recommand obj={item.ProductList}/>
      </View>
    )

    let layout=(e)=>{
      this.setState({recommandBoxHeight:e.layout.y})
    }

    let content = <View>
        <Block/>
        <View style={recommendStyle.viewBox}>
            <Tabs style={recommendStyle.tabBox}
                  tabs={tabs}
                  tabBarActiveTextColor='#F0643C'
                  tabBarInactiveTextColor='#333'
                  tabBarUnderlineStyle={{backgroundColor:'#F0643C',width:10}}
                  initialPage={0}
            >
              {listItems}
            </Tabs>
        </View>
    </View>
    return content
  }

  onScroll = (e)=>{
    if(e.nativeEvent.contentOffset.y > this.state.searchBoxHeight){
      this.refs.animateView.startAnimate()
      if(e.nativeEvent.contentOffset.y > this.state.recommandBoxHeight){

      }
    }else{
      this.refs.animateView.endAnimate()
    }

  }

  render(){
    return (
      <View>
        <ScrollView
          onScroll={(e)=>{this.onScroll(e)}}
          scrollEventThrottle={200}
        >
          <Swiper></Swiper>
          <Header></Header>
          {this.searchContent()}
          <Banner obj={this.state.value}/>
          <Find/>
          {this.visaContent()}
          {this.hotContent()}
          {this.destinationContent()}
          {this.themeContent()}
          {this.travelContent()}
          {this.recommendContent()}
          <Ensure/>
        </ScrollView>
        <FadeInView style={{height: 64, backgroundColor: '#FF5523',paddingTop:10,position:'absolute',top:0}} ref="animateView">
          {this.searchContent(true)}
        </FadeInView>
        {/*{this.tabContent()}*/}
      </View>
    )
  }
}

const recommendStyle = StyleSheet.create({
  viewBox:{
    marginLeft:20,
    marginRight:20,
    width:Dimensions.get('window').width-40
  },
  tabBox:{
    width:Dimensions.get('window').width-40
  },
  proList:{
    alignItems: 'center',
    justifyContent: 'center'
  }
})




