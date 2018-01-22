import React from 'react'
import { View,Text,StyleSheet,Button,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import { Carousel,Tabs } from 'antd-mobile';
import  request from '../util/request'

export default class section extends React.Component{
  constructor(){
    super();
    this.state = {
      value: [],
      visaData:[],
      HotData:[],
      DestinationData:[],
      ThemeData:[],
      TravelData:[],
      RecommendData:[]
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

  blockContent = ()=>{
    let content = <TouchableOpacity><View style={{backgroundColor:'#f5f5f5',height:3}}></View></TouchableOpacity>
    return content
  }

  titleContent = (obj = {title:'',link:'',detail:''})=>{
    let content = <View style={titleStyle.viewBox}>
      <Text style={titleStyle.title}>{obj.title}</Text>
      <Text style={titleStyle.detail}>{obj.detail}</Text>
      {
        obj.link!='' && <Image style={titleStyle.arrow}
                       source={require('.././images/rightarrow.png')}/>
      }
    </View>
    return content
  }

  findContent = ()=>{
    let content = <View style={findStyle.viewBox}>
      <Image style={findStyle.image}
        source={require('.././images/find.png')}/>
      <Carousel
        infinite={true}
        dots={false}
        vertical={true}
        dragging={false}
        autoplay
        easing={'linear'}
        style={findStyle.carousel}
      >
        <View style={findStyle.textBox}><Text numberOfLines={1} ellipsizeMode="tail" style={findStyle.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={findStyle.textBox}><Text style={findStyle.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={findStyle.textBox}><Text style={findStyle.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={findStyle.textBox}><Text style={findStyle.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
        <View style={findStyle.textBox}><Text style={findStyle.text}>家门口的银杏都黄了，是时候出门赏是时候</Text></View>
      </Carousel>
    </View>
    return content
  }

  searchContent = ()=>{
    let content = <View style={searchStyles.searchBox}>
      <Image style={searchStyles.logo}
        source={require('.././images/redlogo.png')}/>
      <View style={searchStyles.searchView}>
          <Image style={searchStyles.iconSearch} source={require('.././images/search.png')}/>
          <Text style={searchStyles.text}>目的地/主题/关键字</Text>
      </View>
    </View>
    return content
  }

  cellContent = (data={},type='small')=>{
    let content = <View>
      <Image style={[type=='big'?{height:88}:{height:44}]}
        source={{uri:data.BcgroundImg+'?imageView2/0/w/124/q/90'}}/>
        <Text style={[cellStyles.text,type=='big'?{transform:[{translateY:-78}]}:{transform:[{translateY:-31}]}]}>{data.Name}</Text>
    </View>
    return content
  }

  bannerContent = ()=>{
    let content = <View style={bannerStyles.bannerBox}>
      <View style={bannerStyles.rowBox}>
        <View style={bannerStyles.leftView}>
          {this.cellContent(this.state.value[0],'big')}
        </View>
        <View style={bannerStyles.middleView}>
          <View style={bannerStyles.topView}>
            {this.cellContent(this.state.value[3])}
          </View>
          <View style={bannerStyles.bottomView}>
            {this.cellContent(this.state.value[8])}
          </View>
        </View>
        <View style={bannerStyles.rightView}>
          <View style={bannerStyles.topView}>
            {this.cellContent(this.state.value[4])}
          </View>
          <View style={bannerStyles.bottomView}>
            {this.cellContent(this.state.value[9])}
          </View>
        </View>
      </View>
      <View style={bannerStyles.rowBox}>
        <View style={[bannerStyles.leftView,{height:44}]}>
          {this.cellContent(this.state.value[1])}
        </View>
        <View style={[bannerStyles.middleView,{height:44}]}>
          {this.cellContent(this.state.value[5])}
        </View>
        <View style={[bannerStyles.rightView,{height:44}]}>
          {this.cellContent(this.state.value[10])}
        </View>
      </View>
      <View style={bannerStyles.rowBox}>
        <View style={bannerStyles.leftView}>
          {this.cellContent(this.state.value[2],'big')}
        </View>
        <View style={bannerStyles.middleView}>
          <View style={bannerStyles.topView}>
            {this.cellContent(this.state.value[6])}
          </View>
          <View style={bannerStyles.bottomView}>
            {this.cellContent(this.state.value[11])}
          </View>
        </View>
        <View style={bannerStyles.rightView}>
          <View style={bannerStyles.topView}>
            {this.cellContent(this.state.value[7])}
          </View>
          <View style={bannerStyles.bottomView}>
            {this.cellContent(this.state.value[12])}
          </View>
        </View>
      </View>
    </View>
    return content
  }

  visaContent = ()=>{
    let listData = this.state.visaData.VisaProducts || []
    let listItems = listData.map((item,index)=>
      <View style={visaStyle.itemBox} key={index}>
        <View style={searchStyles.firstView}>
          <Image style={visaStyle.image}
                 source={{uri:item.ProductImageUrl+'?imageView2/1/w/105/h/70/q/90'}}/>
          <View style={visaStyle.mask}><Text style={visaStyle.text}>{item.ProductName}</Text></View>
        </View>
        <View style={visaStyle.lastView}>
          <Image style={visaStyle.smallImage}
                 source={{uri:item.ProductLogoImg}}/>
          <Text style={visaStyle.price}>￥{item.ProductPrice}起</Text>
        </View>
      </View>
    )
    let titleobj = {title:this.state.visaData.VisaListTitle,link:this.state.visaData.VisaListLink,detail:this.state.visaData.VisaListInfor}
    let content = <View>{this.blockContent()}{this.titleContent(titleobj)}
      <View style={visaStyle.viewBox}>
        {listItems}
      </View>
    </View>
    return content
  }

  hotContent = ()=>{
    let listData = this.state.HotData.HotProducts || []
    let listItems = listData.map((item,index)=>
      <View style={hotStyle.itemBox} key={index}>
        <Image style={hotStyle.image}
               source = {{uri:item.ProductImageUrl+'?imageView2/1/w/162/h/109/q/90'}}/>
        <View style={hotStyle.labelBox}><Text style={hotStyle.label}>立省{item.ProductOriginalPrice-item.ProductPrice}</Text></View>
        <View style={hotStyle.price}><Text style={hotStyle.productPrice}>￥{item.ProductPrice}</Text><Text style={hotStyle.text}>起</Text><Text style={hotStyle.originPrice}>￥{item.ProductOriginalPrice}</Text></View>
        <Text style={hotStyle.name} numberOfLines={2}>{item.ProductName}</Text>
      </View>
    )
    let titleobj = {title:this.state.HotData.HotProductTitle,link:this.state.HotData.HotProducLink,detail:this.state.HotData.HotProducInfor}
    let content = <View>{this.blockContent()}{this.titleContent(titleobj)}
        <View style={hotStyle.viewBox}>
          {listItems}
        </View>
    </View>
    return content
  }

  destinationContent = ()=>{
    let listData = this.state.DestinationData.HotList || []
    let listItems = listData.map((item,index)=>
      <View style={destinationStyle.itemBox} key={index}>
        <Text style={destinationStyle.text}>{item.HotListName}</Text>
        {
          index==2 &&
          <Image style={destinationStyle.image}
          source = {require(`.././images/icon2.png`)}/>
          ||
          index==1 &&
          <Image style={destinationStyle.image}
                 source = {require(`.././images/icon1.png`)}/>
          ||
          index==0 &&
          <Image style={destinationStyle.image}
                 source = {require(`.././images/icon0.png`)}/>
        }
       </View>
    )
    let titleobj = {title:this.state.DestinationData.HotDestinationTitle,link:this.state.DestinationData.HotDestinationLink,detail:this.state.DestinationData.HotDestinationInfor}
    let content = <View>{this.blockContent()}{this.titleContent(titleobj)}
      <View style={destinationStyle.viewBox}>
        {listItems}
      </View>
    </View>
    return content
  }

  themeContent = ()=>{
    let listData = this.state.ThemeData.Traveler || []
    function proitem(props) {
      let list = props.map((item, index)=>
        <View key={index} style={themeStyle.proBox}>
          <Image style={themeStyle.proImg}
                 source={{uri:item.ProductImageUrl+'?imageView2/1/w/105/h/70/q/90'}}/>
          <View style={themeStyle.right}>
            <Text style={themeStyle.titletext} numberOfLines={2}>{item.ProductName}</Text>
            <View style={{flexDirection:'row'}}><Text style={themeStyle.pricetext}>￥{item.ProductPrice}</Text><Text style={themeStyle.text}>起</Text></View>
          </View>
        </View>
      )
      return list
    }

    let listItems = listData.map((item,index)=>
      <View style={themeStyle.itemBox} key={index}>
        <View style={themeStyle.topView}>
          <Image style={themeStyle.largeimage}
                 source={{uri:item.TravelerAvatar+'?imageView2/1/w/375/h/180/q/90'}}/>
          <Image style={themeStyle.mask}
            source={require('.././images/promask.png')}/>
          <Text style={themeStyle.labeltext}>{item.TravelerName}</Text>
          <Text style={themeStyle.detailtext}>{item.TravelerTag}</Text>
        </View>
        <View>{proitem(item.TravelerRecommend)}</View>
      </View>
    )
    let titleobj = {title:this.state.ThemeData.TravelAreaTitle,link:'',detail:this.state.ThemeData.TravelAreaInfor}
    let content = <View>{this.blockContent()}{this.titleContent(titleobj)}
      <View style={themeStyle.viewBox}>
        {listItems}
      </View>
    </View>
    return content
  }

  travelContent = ()=>{
    let listData = this.state.TravelData.Traveler || []
    function detailitem(props) {
      let list = props.map((item, index)=>
        <View key={index}>
        <Text style={travelStyle.detail}>555{item.LvYouDeYiJuHua}</Text>
        <View>
          <Image style={travelStyle.image}
                 source={{uri:item.ProductImageUrl}}/>
          <View style={travelStyle.logoprice}><Text style={travelStyle.pricetext}>￥{item.ProductPrice}</Text><Text style={travelStyle.text}>起</Text></View>
        </View>
        <Text style={travelStyle.proname}>{item.ProductName}</Text>
        <Text style={travelStyle.prosubname}>{item.ProductSubName}</Text>
      </View>)
      return list
    }

    let listItems = listData.map((item,index)=>
      <View style={travelStyle.itemBox} key={index}>
        <Image style={travelStyle.headimage}
               source={{uri:'http://images1.aoyou.com/'+item.TravelerAvatar}}
        />
        <View style={travelStyle.contentBox}>
          <Text style={travelStyle.name}>{item.TravelerName}</Text>
          <Text style={travelStyle.tag}>{item.TravelerTag}</Text>
          {detailitem(item.TravelerRecommend)}
        </View>
      </View>
    )
    let titleobj = {title:this.state.TravelData.TravelAreaTitle,link:'',detail:this.state.TravelData.TravelAreaInfor}
    let content = <View>{this.blockContent()}{this.titleContent(titleobj)}
      <View style={travelStyle.viewBox}>
        {listItems}
      </View>
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

    function label(props) {
      props = props || []
      let labels = props.map((item, index)=><Text style={recommendStyle.text} key={index}>
          {item}
        </Text>
      )
      return labels
    }

    function Items(props) {
      let list = props.map((item,index)=>
        <View style={recommendStyle.proBox} key={index}>
          <View style={recommendStyle.imageBox}>
            <Image style={recommendStyle.image} source={{uri:item.ProductImageUrl+'?imageView2/1/w/335/h/180/q/90'}}/>
            <Text style={recommendStyle.label}>{item.ProductTag}</Text>
            <View style={travelStyle.logoprice}><Text style={travelStyle.pricetext}>￥{item.ProductPrice}</Text><Text style={travelStyle.text}>起</Text></View>
          </View>
          <Text style={recommendStyle.title} numberOfLines={2}>{item.ProductName}</Text>
          <Text style={recommendStyle.detail} numberOfLines={1}>{item.ProductSubName}</Text>
          <View style={recommendStyle.tag}>
            <Text style={recommendStyle.text}>4钻</Text>
            {label(item.dataLabelList)}
          </View>
        </View>
      )
      return list
    }

    let listItems = listData.map((item,index)=>
      <View style={recommendStyle.proList} key={index}>
        {Items(item.ProductList)}
      </View>
    )

    let content = <View>{this.blockContent()}
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

  titContent = ()=>{
    let listInfor = ["首家上市旅行社","36年旅游积淀","透明价格权益保护","首批5A级旅行社","六钻品质标准","出游服务保障承诺"]
    let list = listInfor.map((item, index)=><View key={index} style={titStyle.textBox}>
      <Text style={titStyle.text}>{item}</Text>
      <Image style={titStyle.miniImage} source={require('.././images/iconstar.png')}/>
    </View>)

    let content = <View style={titStyle.viewBox}>
      <View style={titStyle.imageBox}>
        <Image style={titStyle.image}
               source={{uri:'https://pic1.aoyou.com/wap4.0/index/ward.png'}}/>
        <Text style={titStyle.imageText}>遨游6大旅游保障</Text>
      </View>
      <View style={titStyle.list}>{list}</View>
    </View>
    return content
  }

  render(){
    return (
      <View>
        {this.searchContent()}
        {this.bannerContent()}
        {this.findContent()}
        {this.visaContent()}
        {this.hotContent()}
        {this.destinationContent()}
        {this.themeContent()}
        {this.travelContent()}
        {this.recommendContent()}
        {this.titContent()}
      </View>
    )
  }
}
const titStyle = StyleSheet.create({
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
})
const recommendStyle = StyleSheet.create({
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
  }
})
const travelStyle = StyleSheet.create({
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
})
const themeStyle = StyleSheet.create({
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
})
const destinationStyle = StyleSheet.create({
  viewBox:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  itemBox:{
    width:(Dimensions.get('window').width-40) * 0.25,
    height:44,
    position:'relative'
  },
  text:{
    textAlign:'center',
    fontSize:14,
    color:'#333',
    lineHeight:44
  },
  image:{
    height:15,
    width:15,
    position:'absolute',
    top:15,
    left:0
  }
})
const hotStyle = StyleSheet.create({
  viewBox:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  itemBox:{
    width:Dimensions.get('window').width * 0.43,
  },
  image:{
    width:Dimensions.get('window').width * 0.43,
    height:109,
    borderRadius:6
  },
  price:{
    marginTop:7,
    flexDirection:'row'
  },
  productPrice:{
    fontSize:17,
    color:'#FC5A3F'
  },
  originPrice:{
    fontSize:14,
    color:'#999',
    marginLeft:10,
    textDecorationLine:'line-through',
    marginTop:4
  },
  text:{
    fontSize:12,
    color:'#FC5A3F',
    marginTop:6
  },
  name:{
    fontSize:14,
    color:'#333',
    lineHeight:19,
    marginTop:5,
    marginBottom:15
  },
  labelBox:{
    backgroundColor:'#FF812F',
    position:'absolute',
    top:0,
    left:10,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    overflow:'hidden'
  },
  label:{
    paddingLeft:2,
    paddingRight:2,
    paddingTop:4,
    paddingBottom:4,
    color:'#fff',
    fontSize:12,
  }
})
const visaStyle = StyleSheet.create({
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
})
const titleStyle = StyleSheet.create({
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
})
const findStyle = StyleSheet.create({
  viewBox:{
    height:50,
    flexDirection:'row'
  },
  image:{
    width:73,
    height:18,
    marginTop:16,
    marginLeft:20
  },
  carousel:{
    marginLeft:10,
    width:Dimensions.get('window').width-123
  },
  textBox:{
    height:50
  },
  text:{
    fontSize:14,
    color:'#666',
    lineHeight:47,
    overflow:'hidden'
  }
})
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
const bannerStyles = StyleSheet.create({
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

})
const searchStyles = StyleSheet.create({
  searchBox:{
    height:60,
    width: Dimensions.get('window').width,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'row'
  },
  searchView:{
    borderColor:'#FF5523',
    borderWidth:1,
    height:30,
    borderRadius:50,
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    height:21,
    width:44,
    marginRight:16,
    marginTop:5
  },
  iconSearch:{
    height:15,
    width:15
  },
  text:{
    fontSize:14,
    color:'#444',
    marginLeft:6
  }
})