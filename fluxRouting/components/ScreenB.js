import React,{ Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class ScreenB extends Component {
  
  constructor(props)
  {
    super(props)
  }
  
  render()
  {
    return(
      <View style = {styles.container}>
        <Text>
           Hello Again
        </Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }

})