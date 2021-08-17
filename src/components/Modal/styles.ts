import styled from 'styled-components/native';
import { Modal} from 'react-native';

export const ModalView = styled(Modal)``;

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.colors.overlay };
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.colors.background };
  margin-top: 100px;
`;