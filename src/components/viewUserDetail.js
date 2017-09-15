import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Card,CardItem,Title,List,ListItem, Right, Icon, View } from 'native-base';
import { StyleSheet, Text, Image ,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
class ViewUserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        let email = this.props.Email;
        console.log('email :', email)
        this.props.UserDetailData()
        console.log('detail : ', this.props.UserDetailData())

    }



    render() {
        const Details = this.props.Detail ? this.props.Detail : []
        console.log('details : ', Details)
        return (
            <Container>
                <Content>
                    {


                        Details.map((item, i) => {
                            return (
                                <ScrollView>
                                    <Card style={{ flex: 1 }}>
                                        <CardItem key={i+1}  >
                                            <List  >
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }} >Yesterday ? :</Text><Text>{item.yesterday}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Today ? :</Text><Text>{item.today}</Text>

                                                </ListItem>


                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Problems ? :</Text><Text>{item.problems}</Text>
                                                </ListItem>
                                                  <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Date :</Text><Text>{item.date}</Text>
                                                </ListItem>

                                            </List>
                                        </CardItem>
                                    </Card>

                                </ScrollView>

                            )
                        })
                    }


                </Content>
            </Container>
        )
    }
}



export default ViewUserDetail;

const styles = StyleSheet.create({


});
