import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: ''
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
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let cpassword = this.state.cpassword;
        let obj = {
            name: name,
            email: email,
            password: password,
            cpassword: cpassword
        }
        console.log('object', obj)
        this.props.SignupData(obj)

    }

    render() {
        return (
            <Container
                style={styles.container}>
                <Content>
                    <Text style={{ fontFamily: 'sans-serif-condensed', alignSelf:'center',marginTop :15, fontSize:20,color:'#FFFFFF' }}>Signup</Text>
                    <Form onSubmit={this.handleForm}>
                        <Item floatingLabel>
                            <Label style={{color:'#FFFFFF'}}>Username</Label>
                            <Input
                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(name) => this.setState({ name })}

                            />
                        </Item>

                        <Item floatingLabel>
                            <Label  style={{color:'#FFFFFF'}}>Useremail</Label>
                            <Input

                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(email) => this.setState({ email })}

                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label  style={{color:'#FFFFFF'}}>Password</Label>
                            <Input

                                secureTextEntry
                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(password) => this.setState({ password })}

                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label  style={{color:'#FFFFFF'}}>Confirm Password</Label>
                            <Input
                                secureTextEntry
                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(cpassword) => this.setState({ cpassword })}

                            />
                        </Item>

                        <Button
                            type='submit'
                            onPress={this.handleForm}
                            style={styles.btn} full success>
                            <Text style={{color:'#FFFFFF'}}>sign up</Text>
                        </Button>
                    </Form>
                    <View  >

                        <Text style={styles.txt}>Have an account ? <Text onPress={() => Actions.loginCon()} style={{ color: '#1eb3cd' }}> Sign in</Text></Text>

                    </View>

                </Content>
            </Container>
        )
    }
}



export default Signup;

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    btn: {
        width: 300,
        marginTop: 30,
        marginLeft: 38,
        backgroundColor: '#CC1D1D',
    },
    inpt: {
        //width: 140,
        height: 50,
        backgroundColor: 'transparent',
        color: 'white',
       alignSelf:'center'


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
    },
    txt: {
        color: 'white',
        marginLeft: 80,
        marginTop: 20
    }, container: {

        backgroundColor: '#E43F3F',
        // flex: 1,
        // width: undefined,
        // height: undefined,
        // backgroundColor: 'transparent',
        // justifyContent: 'center',
        // alignItems: 'center',
    },

});
