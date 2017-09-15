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
        console.log('detail : ', this.props.AllUserDetailData())

    }



    render() {
        const Details = this.props.AllDetail ? this.props.AllDetail : []
        console.log('details : ', Details)
        return (
            <Container>
                <Content>
                     <ScrollView>
                    {


                        Details.map((item, i) => {
                            return (
                               
                                    <Card style={{ flex: 1 }}>
                                        <CardItem   >
                                            <List key={i+1} >
                                                 <ListItem>
                                                    <Text style={{ color: '#88FF00' }} >Email  :</Text><Text>{item.email}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }} >Yesterday  :</Text><Text>{item.yesterday}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Today  :</Text><Text>{item.today}</Text>

                                                </ListItem>


                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Problems  :</Text><Text>{item.problems}</Text>
                                                </ListItem>
                                                  <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Date :</Text><Text>{item.date}</Text>
                                                </ListItem>

                                            </List>
                                        </CardItem>
                                    </Card>

                                
                                  

                            )
                        })
                    }
                    </ScrollView>
                      <Footer>
          <FooterTab>
            <Button vertical>
              <Icon
              onPress = {this.logOut}
               name="person" />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>


                </Content>
            </Container>
        )
    }
}



export default ViewAllUserDetail;

const styles = StyleSheet.create({


});
