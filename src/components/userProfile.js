import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label,Footer, FooterTab, Body, Button, Left, Card,CardItem,Title,List,ListItem, Right, Icon, View } from 'native-base';
import { StyleSheet, Text, Image ,ScrollView,Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  Actions.signupCon();
}, function(error) {
  console.error('Sign Out Error', error);
});
    }

    componentDidMount() {
let email = this.props.email
        console.log('emaill',this.props.email)
        this.props.userProfileData(email)

    }



    render() {
       
        const profileData = this.props.profiles  ? this.props.profiles : [] 
        console.log("user Profile",profileData)

        return (
            <Container>
                <Content>
                
                    {


                        profileData.map((item, i) => {
                            return (
                               
                                    <Card key={i} style={{ flex: 1 }}>
                                        <List style={Style.listStyle}>
                    <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>Date </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {item.date}
                            </Text>
                        </Right>
                    </ListItem>
                      <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>Today ?  </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {item.today}
                            </Text>
                        </Right>
                    </ListItem>
                      <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>YesturDay </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {item.yesterday}
                            </Text>
                        </Right>
                    </ListItem>
                      <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>Problems </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {item.problems}
                            </Text>
                        </Right>
                    </ListItem>
                    </List>

                                    </Card>

                                
                                  

                            )
                        })
                    }
                   
                  </Content>
                  <Footer>
          <FooterTab style = {{ backgroundColor: '#CC1D1D', }}>
            <Button vertical>
              <Icon
              onPress = {this.logOut}
               name="person" />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>
        )
    }
}



export default UserProfile;

const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
    avatar: {
        flex: 1, justifyContent: "flex-start", paddingTop: 10,
        alignItems: "center", height: 150, width: "100%"
    },
    name: {
        // color: "white",
        textAlign: "center"
    },
    listStyle: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.98,

    },
     listStyle2: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.9,

    }
})
