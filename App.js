import React,{ Component } from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render() {
    return( 
      <View style={style.container}> 
       <View style={style.container1}>
       <Text style={style.text}> Alwin Labsan</Text>
       <Image style= {style.img} source={logo} />
       </View>
      </View>
    )
  }
}  

const style = StyleSheet.create ({
container: {
  flex: 1, 
backgroundColor: "#F0E68C",
alignItems: 'center',
padding: "20px" 
},
container1: {
  backgroundColor: "#6F4E37" 
},
text: {
  fontSize:50,
  color: "white",
  fontFamily: "Impact",
  fontWeight: 'bold',
}, 

img:{
  width: 50, 
  height: 50, 

}
});

export default App;  