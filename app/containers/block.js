import React from 'react'
import { View } from 'react-native'

const Block = ({style}) => (
    <View style={style}></View>
);

Block.defaultProps = {
  style:{
    backgroundColor:'#f5f5f5',
    height:3
  }
};
export default Block