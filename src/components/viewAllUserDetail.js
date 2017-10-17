import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label,Footer, FooterTab, Body, Button, Left, Card,CardItem,Title,List,ListItem, Right, Icon, View } from 'native-base';
import { StyleSheet, Text, Image ,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'
class ViewAllUserDetail extends Component {
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
        let email = this.props.Email;
        console.log('email :', email)
        this.props.AllUserDetailData()

    }



    render() {
       
        const Details = this.props.AllDetail  ? this.props.AllDetail : [] 
        console.log("render detail",Details)

        return (
            <Container>
                <Content>
                    {


                        Details.map((item, i) => {
                            return (
                               
                                    <Card key={i} style={{ flex: 1 }}>
                                        <CardItem>
                                           <Text> {item.email}</Text>
                                        </CardItem>
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



export default ViewAllUserDetail;

const styles = StyleSheet.create({


});
