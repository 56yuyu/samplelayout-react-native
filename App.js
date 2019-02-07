/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Index from './src/Index';
import Main from './src/template/HomeTab';


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      timeSkip: false,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        timeSkip: true,
      })
    }, 2500)
  }

  render() {
    return (
      (this.state.timeSkip)?<Main />:<Index />
    )
  }
  
}