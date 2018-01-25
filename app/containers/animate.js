import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
      flag:true
    };
  }
  startAnimate=()=>{  // 开始执行动画
    if(this.state.flag){
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.fadeAnim,                      // 动画中的变量值
        {
          toValue: 1,                             // 透明度最终变为1，即完全不透明
          duration: 200,                         // 动画时间
        }
      ).start();
      this.setState({flag:false})
    }
  }

  endAnimate=()=>{  // 开始执行动画
    if(!this.state.flag){
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.fadeAnim,                      // 动画中的变量值
        {
          toValue: 0,                             // 透明度最终变为0，即完全不透明
          duration: 200,                         // 动画时间
        }
      ).start();
      this.setState({flag:true})
    }
  }
  
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}