import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex:1;
  padding: 30px;
`;
export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #666;

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

export const Stars = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled(RectButton)`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;
export const OwrnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
