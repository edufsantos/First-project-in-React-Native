import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  SubmitButtom,
  Input,
  List,
  ProfileButtomText,
  ProfileButtom,
  Avatar,
  Bio,
  Name,
  User

} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import '../../config/reactotronConfig';
import api from '../../services/api';

export default class Main extends Component {
  state  ={
    newUser:'',
    user: [],
    loading: false
  }
  static navigationOptions = {
    title: 'Usuarios'
  }
  static porpTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired
  }
  async componentDidMount(){
    const user = await AsyncStorage.getItem('users');

    if(user){
      this.setState({user: JSON.parse(user)});
    }
  }
  componentDidUpdate(_, prevState){
    const { user } = this.state;
    if(prevState.user !== user){
      AsyncStorage.setItem('users', JSON.stringify(user));
    }
  }

  handleAddUser =  async () => {
    const {user, newUser} = this.state;

    this.setState({loading : true})

    const response = await api.get(`/users/${newUser}`);

    const data ={
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      Avatar: response.data.avatar_url
    }

    this.setState({
      user: [...user, data],
      newUser: '',
      loading: false
    });

    Keyboard.dismiss();
  }

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', {
      user,
    }
    );
  }

  render(){
    const {user, newUser, loading} = this.state;
    return(
        <Container>
          <Form>
            <Input value={newUser} onChangeText={text => this.setState({ newUser : text })}
             autoCorrect={false}
              autoCapitalize="none"
               placeholder="adicionar úsuario"
               returnKeyType="send"
               onSubmitEditing={this.handleAddUser}/>
              <SubmitButtom loading={loading} onPress={this.handleAddUser}>
              {loading ? <ActivityIndicator color="#fff"/>:
                <Icon name="add" size={20} color="#fff"/>
              }
            </SubmitButtom>
          </Form>

          <List
            data={user}
            keyExtractor={user => user.login}
            renderItem={({ item }) =>(
                <User>
                  <Avatar  source={{ uri: item.Avatar,}}/>
                  <Name>{item.name}</Name>
                  <Bio>{item.bio}</Bio>
                  <ProfileButtom onPress={() => this.handleNavigate(item)}>
                    <ProfileButtomText>Ver Perfil</ProfileButtomText>
                  </ProfileButtom>
                </User>
            )}
          />
        </Container>
    );
  }
}
