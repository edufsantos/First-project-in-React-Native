import React, { Component } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Container, Header, Avatar, Name, Bio, Stars, Starred, OwrnerAvatar, Info, Title,Author} from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };
  static propTypes ={
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.isRequired
      }).isRequired
    }).isRequired,
  }
  async componentDidMount(){
    // buscando os dados do usuario dentro de props>route>params>user
    const {route} = this.props;
    const {user} = route.params;

    const response = await api.get(`/users/${user.login}/starred`);
    //adicionando o  response.data dentro state: start[]
    this.setState({ stars: response.data});
  }

  render(){
    const {stars} = this.state;
    const {route} = this.props;
    const {user} = route.params;

    return (
       <Container>
         <Header>
            <Avatar  source={{ uri: user.Avatar,}}/>
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
         </Header>

         <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({item}) => (
              <Starred>
                <OwrnerAvatar source={{uri: item.owner.avatar_url}}/>
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
       </Container>
     );
  }
}


