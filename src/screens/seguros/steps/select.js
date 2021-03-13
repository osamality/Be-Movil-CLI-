import React from 'react';
 
import { View, Text,StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {TextInput,Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends React.PureComponent {
    state = { filter: null };
    
    
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  handleSelect = (e) =>{
      console.log(e)
      this.hideMenu()
      this.setState({
          selected : e
      })

  }
  sort = filter => {
      console.log(filter)
    this.setState({ filter });
    this._menu.hide();
  };
 
  render() {
    return (
        <Menu
          ref={this.setMenuRef}
        //   button={<Text onPress={this.showMenu}>Show menu</Text>}
        button = {
            <TextInput  style={defaultStyle.InputText1Style}
            label="Documento"
            value={this.state.filter}
            mode='outlined'
            // onChangeText={text => setFieldValue("Apellido",text)}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
            editable={false}
            onTouchStart = {this.showMenu}
            
            right={<TextInput.Icon
            style={{marginTop:10}}
            color="grey"
            onPress = {this.showMenu}
                name="chevron-down"
            />}
            // onPress={this.showMenu}
            // onBlur={handleBlur("Apellido")}
          //   style={{marginBottom:2}}
          />
        }
        >
          <MenuItem onPress={()=>this.sort("cc")} filter="test">CC</MenuItem>
          <MenuItem onPress={()=>this.sort("Pasaporte")}>Pasaporte</MenuItem>
          <MenuDivider />
        </Menu>
    );
  }
}
const defaultStyle = StyleSheet.create({
    select:{
        backgroundColor: '#fff',
        height:45,
        // width:"100%",
        marginHorizontal:10,
        marginBottom:2,
        borderColor :"grey",
        borderWidth:1,
        borderRadius : 4
    },
    containerStyle: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
      },
    InputText1Style: {
        backgroundColor: '#fff',
        // paddingBottom:20,
        // shadowColor: '#000',
        // shadowOpacity: 0.4,
        // elevation: 2,
        // position: 'relative',
        height:50,
        // width:"100%",
        marginHorizontal:10,
        marginBottom:15
        // marginLeft:5
    },
})
export default App;