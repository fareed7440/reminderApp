import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Footer, FooterTab, Label, Body, Button, Left, Title, Right, Icon, View } from 'native-base';
import { StyleSheet, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase'
class Home extends Component {
    constructor(props) {
        super(props);
this.state = {
            date: new Date(),
            yesterday: '',
            today: '',
            problems: '',

        }
        this.logOut = this.logOut.bind(this);
        this.handleForm = this.handleForm.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    logOut() {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            Actions.signupCon();
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    }
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    handleForm = (e) => {
        e.preventDefault();
        let d = new Date();
        let yesterday = this.state.yesterday;
        let today = this.state.today;
        let problems = this.state.problems;
        let date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
        let email = this.props.Email

        let obj = {

            yesterday: yesterday,
            today: today,
            problems: problems,
            date: date,
            email: email
        }
        console.log('obj', obj);
        this.props.HomeData(obj);
          this.setState({yesterday:'', today:'', problems:'', date:'' })



    }


    render() {
        return (
            <Image
                source={require('../images/mm.png')}
                style={styles.container}>
                <Content>
                    <Header style={styles.hdr} >
                        <Left


                        >
                            <Button transparent>
                                <Icon name="ios-arrow-back"
                                    onPress={() => Actions.signupCon()}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Answers Please</Title>
                        </Body>
                        <Right >
                        </Right>
                    </Header>
                    <Form>

                        <Item floatingLabel>
                            <Label style={{ color: 'red' }}>What you have done yesterday ?</Label>
                            <Input
                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(yesterday) => this.setState({ yesterday })}


                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'red' }}>What you will be doing today ? </Label>
                            <Input

                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(today) => this.setState({ today })}


                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{ color: 'red' }}>What are the problems you have faced ? </Label>
                            <Input

                                style={styles.inpt}
                                value={this.state.value}
                                onChangeText={(problems) => this.setState({ problems })}


                            />
                        </Item>
                        <DatePicker
                            style={{ width: 350, marginTop: 20 }}
                            date={this.state.date}
                            mode="date"


                            placeholder="select date"
                            format="YYYY.DD.MM"
                            minDate={new Date()}
                            maxDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }

                            }}
                            value={this.state.value}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />

                        <Button
                            onPress={this.handleForm}

                            style={styles.btn} full success>
                            <Text>Submit</Text>
                        </Button>
                    </Form>
                    <Footer style = {{marginTop : 30 }}>

                        <FooterTab>
                            <Button vertical>
                                <Icon
                                    onPress={this.logOut}
                                    name="person" />
                                <Text>Log Out</Text>
                            </Button>
                             <Button vertical>
              <Icon 
               onPress={() => Actions.viewUserDetCon()}
                   name="apps" />
              <Text>View Ans</Text>
            </Button>
                        </FooterTab>
                    </Footer>


                </Content>
            </Image>
        )
    }
}



export default Home;

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
        marginTop: 80,
        marginLeft: 22,
        backgroundColor: '#1eb3cd',
    },
    inpt: {
        width: 200,
        height: 60,
        backgroundColor: 'transparent',
        color: 'white',
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
    }, container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
