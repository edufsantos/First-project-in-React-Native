import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;


`;
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width:1px;
  border-color: #999;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButtom = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${porps => porps.loading ? 0.7 : 1};

`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})`
  margin-top: 20px;
`;


export const ProfileButtomText = styled.Text`
  color: #eee;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ProfileButtom = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background: #7159c1;
  justify-content: center;
  height: 36px;
  border-radius: 4px;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Bio = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #eee;
  padding: 20px;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 5px;
  text-align: center;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
