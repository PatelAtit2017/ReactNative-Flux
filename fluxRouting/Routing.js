import React,{ Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {  Scene, Reducer,Router,Switch,Modal,Actions,ActionConst } from 'react-native-router-flux';
import ScreenA from './components/ScreenA'
import ScreenB from './components/ScreenB'
import reducerCreateUtil from './util/reducer'

export default class Routing extends Component {
  
  constructor(props)
  {
    super(props)
  }
  
  render()
  {
    return (
      <Router createReducer={reducerCreateUtil} >
      <Scene key="root">
        <Scene key="modal" component={Modal} >
         <Scene key="myTabBar" backButtonImage={require('./assets/back.png')} tabs={false} tabBarStyle={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: '#00ff00' }}>
           <Scene key="screenA" component={ScreenA} title="Screen A" hideNavBar={false} />
           <Scene key="screenB" component={ScreenB} title="Screen B" hideNavBar={false} onLeft={() => Actions.pop()}
           leftButtonImage={require('./assets/back.png')} />
         </Scene>
        </Scene>
      </Scene>   
      </Router>
    )
  }
  
  
}