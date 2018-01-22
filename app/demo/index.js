import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry,View,ScrollView } from 'react-native'
import { List } from 'antd-mobile'
import Accordion from './accordion'
import ActionSheet from './action-sheet'
import ActivityIndicator from './activity-indicator'
import Badge from './badge'
import Button from './button'
import Card from './card'
import Carousel from './carousel'
import CheckBox from './checkbox'
import DatePicker from './date-picker'
import DatePickerView from './date-picker-view'
import Drawer from './drawer'
import Flex from './flex'
import Grid from './grid'
import ImagePicker from './image-picker'
import InputItem from './input-item'
import ListItem from './list'
import Modal from './modal'
import NoticeBar from './notice-bar'
import Pagination from './pagination'
import PickerView from './picker-view'
import Picker from './picker'
import Popover from './popover'
import Progress from './progress'
import Radio from './radio'
import Result from './result'
import SearchBar from './search-bar'
import SegmentedControl from './segmented-control'
import Slider from './slider'
import Stepper from './stepper'
import Steps from './steps'
import SwipeAction from './swipe-action'
import Switch from './switch'
import TabBar from './tab-bar'
import Tabs from './tabs'
import Tag from './tag'
import TextareaItem from './textarea-item'
import Toast from './toast'
import WhiteSpace from './white-space'
import WingBlank from './wing-blank'


const Item = List.Item;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',  // 用来设置主页面头部显示名称
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <List renderHeader={() => 'component'}>
          <Item arrow="horizontal" onClick={() => navigate('Accordion')}>Accordion 手风琴</Item>
          <Item arrow="horizontal" onClick={() => navigate('ActionSheet')}>ActionSheet 动作面板</Item>
          <Item arrow="horizontal" onClick={() => navigate('ActivityIndicator')}>ActivityIndicator 活动指示器</Item>
          <Item arrow="horizontal" onClick={() => navigate('Badge')}>Badge 徽标数</Item>
          <Item arrow="horizontal" onClick={() => navigate('Button')}>Button 按钮</Item>
          <Item arrow="horizontal" onClick={() => navigate('Card')}>Card 卡片</Item>
          <Item arrow="horizontal" onClick={() => navigate('Carousel')}>Carousel 走马灯</Item>
          <Item arrow="horizontal" onClick={() => navigate('CheckBox')}>CheckBox 复选框</Item>
          <Item arrow="horizontal" onClick={() => navigate('DatePicker')}>DatePicker 日期选择</Item>
          <Item arrow="horizontal" onClick={() => navigate('DatePickerView')}>DatePickerView 日期选择视图</Item>
          <Item arrow="horizontal" onClick={() => navigate('Drawer')}>Drawer 抽屉</Item>
          <Item arrow="horizontal" onClick={() => navigate('Flex')}>Flex 布局</Item>
          <Item arrow="horizontal" onClick={() => navigate('Grid')}>Grid 网格列表</Item>
          <Item arrow="horizontal" onClick={() => navigate('ImagePicker')}>ImagePicker 图片选择</Item>
          <Item arrow="horizontal" onClick={() => navigate('InputItem')}>InputItem 文本输入</Item>
          <Item arrow="horizontal" onClick={() => navigate('List')}>List 列表</Item>
          <Item arrow="horizontal" onClick={() => navigate('Modal')}>Modal 对话框</Item>
          <Item arrow="horizontal" onClick={() => navigate('NoticeBar')}>NoticeBar 通告栏</Item>
          <Item arrow="horizontal" onClick={() => navigate('Pagination')}>Pagination 分页器</Item>
          <Item arrow="horizontal" onClick={() => navigate('PickerView')}>PickerView 选择器视图</Item>
          <Item arrow="horizontal" onClick={() => navigate('Picker')}>Picker 选择器</Item>
          <Item arrow="horizontal" onClick={() => navigate('Popover')}>Popover 气泡</Item>
          <Item arrow="horizontal" onClick={() => navigate('Progress')}>Progress 进度条</Item>
          <Item arrow="horizontal" onClick={() => navigate('Radio')}>Radio 单选框</Item>
          <Item arrow="horizontal" onClick={() => navigate('Result')}>Result 结果页</Item>
          <Item arrow="horizontal" onClick={() => navigate('SearchBar')}>SearchBar 搜索栏</Item>
          <Item arrow="horizontal" onClick={() => navigate('SegmentedControl')}>SegmentedControl 分段器</Item>
          <Item arrow="horizontal" onClick={() => navigate('Slider')}>Slider 滑动输入条</Item>
          <Item arrow="horizontal" onClick={() => navigate('Stepper')}>Stepper 步进器</Item>
          {/*<Item arrow="horizontal" onClick={() => navigate('Steps')}>Steps 步骤条</Item>*/}
          <Item arrow="horizontal" onClick={() => navigate('SwipeAction')}>SwipeAction 滑动或长按操作</Item>
          <Item arrow="horizontal" onClick={() => navigate('Switch')}>Switch 滑动开关</Item>
          <Item arrow="horizontal" onClick={() => navigate('TabBar')}>TabBar 标签栏</Item>
          <Item arrow="horizontal" onClick={() => navigate('Tabs')}>Tabs 标签页</Item>
          <Item arrow="horizontal" onClick={() => navigate('Tag')}>Tag 标签</Item>
          <Item arrow="horizontal" onClick={() => navigate('TextareaItem')}>TextareaItem 多行输入</Item>
          <Item arrow="horizontal" onClick={() => navigate('Toast')}>Toast 轻提示</Item>
          <Item arrow="horizontal" onClick={() => navigate('WhiteSpace')}>WhiteSpace 上下留白</Item>
          <Item arrow="horizontal" onClick={() => navigate('WingBlank')}>WingBlank 两翼留白</Item>
        </List>
      </ScrollView>
    );
  }
}

const App =
  StackNavigator({
    Home: { screen: HomeScreen },
    Accordion: { screen: Accordion },
    ActionSheet: { screen: ActionSheet },
    ActivityIndicator: { screen: ActivityIndicator },
    Badge: { screen: Badge },
    Button: { screen: Button },
    Card: { screen: Card },
    Carousel: { screen: Carousel },
    CheckBox: { screen: CheckBox },
    DatePicker: { screen: DatePicker },
    DatePickerView: { screen: DatePickerView },
    Drawer: { screen: Drawer },
    Flex: { screen: Flex },
    Grid: { screen: Grid },
    ImagePicker: { screen: ImagePicker },
    InputItem: { screen: InputItem },
    List: { screen: ListItem },
    Modal: { screen: Modal },
    NoticeBar: { screen: NoticeBar },
    Pagination: { screen: Pagination },
    PickerView: { screen: PickerView },
    Picker: { screen: Picker },
    Popover: { screen: Popover },
    Progress: { screen: Progress },
    Radio: { screen: Radio },
    Result: { screen: Result },
    SearchBar: { screen: SearchBar },
    SegmentedControl: { screen: SegmentedControl },
    Slider: { screen: Slider },
    Stepper: { screen: Stepper },
    Steps: { screen: Steps },
    SwipeAction: { screen: SwipeAction },
    Switch: { screen: Switch },
    TabBar: { screen: TabBar },
    Tabs: { screen: Tabs },
    Tag: { screen: Tag },
    TextareaItem: { screen: TextareaItem },
    Toast: { screen: Toast },
    WhiteSpace: { screen: WhiteSpace },
    WingBlank: { screen: WingBlank },
  });

export default App
