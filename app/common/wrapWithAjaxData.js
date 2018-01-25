import React from 'react'

export default (WrappedComponent, requestObj)=>{
  class AjaxActions extends Component{
    constructor(){
      super()
      this.state = {data:null}
    }

    componentWillMount(){
      request(requestObj.url, requestObj.type, requestObj.obj).then((responseData)=>{
        this.setState({
          data: JSON.parse(responseData.Data)
        })
      })
    }

    render(){
      return(
        <WrappedComponent data={this.state.data}/>
      )
    }
  }
  return AjaxActions
}