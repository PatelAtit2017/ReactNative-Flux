import React,{ Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {  Scene, Reducer,Router,Switch,Modal,Actions,ActionConst } from 'react-native-router-flux';

export default class ScreenA extends Component {
  
  constructor(props)
  {
    super(props)
  }
  
  render()
  {
    return(
      <View style = {styles.container}>
        <Text>
           Hello
        </Text>
        <TouchableOpacity style={styles.ButtonStyle} onPress={ () => {Actions.screenB({})} }>
           <Text style={styles.ButtonTextStyle} >Press Me!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   ButtonStyle: {
    width: null,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    marginBottom: 24,
    alignSelf: 'stretch',
    backgroundColor: '#dd1c24',
    height: 40,
    justifyContent: 'center',
    borderRadius:3,
  },
  ButtonTextStyle: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }

})