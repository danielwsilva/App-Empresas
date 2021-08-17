import styled from 'styled-components/native';

export const Container = styled.View`
  width: 76%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.placeholder };
  align-self: flex-end;
  margin: 12px 0;
`;
