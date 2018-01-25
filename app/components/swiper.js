import React from 'react'
import { View,Text,StyleSheet,Button,Image,Dimensions } from 'react-native'
import { Carousel } from 'antd-mobile';

export default class Swiper extends React.Component{
  constructor(){
    super(); //在使用ES6的class时候，必须调用 super(); 方法才能在继承父类的子类中正确获取到类型的 this
    this.state = {
      value: []
    }
  }

  componentWillMount(){
    fetch('http://elementmicro.aoyou.com/wap/ElementService/GetBannerList', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"cityId":"1","channelTypeid":385,"type":2,"SpaceGuid":"52ECF4D4-4B57-47A4-BE91-EE6779619E5B"})
    }).then((response) =>{
      let aaa = JSON.parse(response._bodyText).Data
      this.setState({
        value: JSON.parse(aaa)
      })
    })
  }

  content = ()=>{
    //var aaa = [{"img":"https://images1.aoyou.com/productlist/201711/tl0f8230135501.jpg","url":"http://mact.aoyou.com/hd/chunjiely/index.html  ","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0},{"img":"https://images1.aoyou.com/productlist/201801/066lvd05095736.jpg","url":"http://m.aoyou.com/search/package.html?s=b1-l34910","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0},{"img":"https://images1.aoyou.com/productlist/201712/d6240212175440.jpg","url":"http://mact.aoyou.com/hd/beifei/index.html","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0},{"img":"https://images1.aoyou.com/productlist/201712/6pddv212095627.jpg","url":"http://m.aoyou.com/s/hd/a.html?id=1072","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0},{"img":"https://images1.aoyou.com/productlist/201712/p4phxd19184142.jpg","url":"http://mact.aoyou.com/hd/dishini/","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0},{"img":"https://images1.aoyou.com/productlist/201712/h6608r08154026.jpg","url":"http://mact.aoyou.com/Unionpay/UnionIndex2017","adId":0,"adName":null,"picUrl":null,"androidUrl":null,"iosUrl":null,"wapUrl":null,"remark1":null,"remark2":null,"remark3":null,"remarDoc":null,"backgroundcolo":null,"endtime":0,"sortNo":0}]
    let carouselView = []
    var bbb = this.state.value
    if(bbb && bbb instanceof Array){
      carouselView = bbb.map((item, index)=>
        <View style={[ styles.Viewbox ]} key={index}>
          <Image style={styles.Imgbox} source={{uri: item.img}}/>
        </View>
      )
    }else{
      carouselView = <View>
        <Image style={styles.Imgbox} source={require('.././images/placeholder.png')}/>
      </View>
    }

    return <Carousel
      infinite={true}
      autoplay={false}
      autoplayInterval={1000}
      easing={'linear'}
    >{carouselView}</Carousel>
  }

  render(){
    return (
      <View style={styles.swiperView}>
        {/*<Button style={{height:30}} title="Press me" onPress={() => this.setState({value: 'X'})}></Button>*/}
        {this.content()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  swiperView:{
    height: 180
  },
  Viewbox:{
    height: 180,
    backgroundColor: '#DFDFDF',
    alignItems: 'center'
  },
  Imgbox:{
    height: 180,
    width: Dimensions.get('window').width,
    resizeMode:'cover'
  }
})

