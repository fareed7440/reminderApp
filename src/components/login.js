import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon,View } from 'native-base';
import { StyleSheet, Text,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props)
          this.state = {
          
            email: '',
            password: '',
          }

         this.handleForm = this.handleForm.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

     handleInput = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    handleForm = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
       
        let obj = {
          
            email: email,
            password: password,
          
        }
        console.log('object', obj)
        this.props.loginData(obj)

    }


    render() {
        return (
            <Container
        style={styles.container}>
                <Content>
                    <Text style={{ fontFamily: 'sans-serif-condensed', alignSelf:'center',marginTop :15, fontSize:20,color:'#FFFFFF' }}>Login</Text>
                    <Form>

                        <Item floatingLabel>
                            <Label style={{color:'#FFFFFF'}}>Email</Label>
                            <Input
                           style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(email) => this.setState({ email })}

                            
                             />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{color:'#FFFFFF'}}>Password</Label>
                            <Input
                                secureTextEntry
                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(password) => this.setState({ password })}

                            
                             />
                        </Item>

                        <Button 
                        onPress={this.handleForm}
                        
                         style={styles.btn} full success>
                            <Text style={{color:'#FFFFFF'}}>Login</Text>
                        </Button>
                    </Form>
                    <View  >

                        <Text style={styles.txt}> To Register ? <Text onPress={() => Actions.signupCon()} style={{ color: '#1eb3cd' }}>Sign up</Text></Text>

                    </View>





                </Content>
            </Container>
          
        )
    }
}



export default Login;

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
btn : {
      width: 300,
        marginTop: 30,
        marginLeft: 38,
        backgroundColor: '#CC1D1D',
}, 
inpt : {
    width:200,
    height : 60,
     backgroundColor: 'transparent',
     color:'white',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',

    

},
 background: {
    backgroundColor: '#acbad1',
    justifyContent: 'center'
  },
 hdr: {
    backgroundColor: '#1eb3cd',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },container: {
    backgroundColor: '#E43F3F',
  },
 txt: {
        color: 'white',
        marginLeft: 80,
        marginTop: 20
    },

});
