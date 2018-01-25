import React from 'react'
import { Text,Image, Dimensions, View } from 'react-native'

const Search = ({
    style,
    obj,
    istop
}) => {
  let textstyle = istop?{backgroundColor:'#fff'}:{}
  let content =
    <View style={style.searchBox}>
      <Image style={style.logo}
             source={istop?require('.././images/whitelogo.png'):require('.././images/redlogo.png')}/>
      <View style={[style.searchView,textstyle]}>
        <Image style={style.iconSearch} source={require('.././images/search.png')}/>
        <Text style={style.text}>目的地/主题/关键字</Text>
      </View>
    </View>
  return content
}


Search.defaultProps = {
  style:{
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
  },
  obj:[]
};
export default Search