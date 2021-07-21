import styled from 'styled-components';

import { shadow_default } from '../../styles/styles';

export const Button = styled.button`
  ${shadow_default};
  background-color: red;
  padding: 5px;
`;

export const NewButton = styled(Button)`
  background-color: green;
  padding: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;

  background-color: lightblue;
  height: 100vh;

  justify-content: center;
  align-items: center;

  button {
    ${shadow_default};
    border: 0;

    width: 80vw;
    height: 80vh;

    padding: 15px;
    background-color: lightgrey;
    border-radius: 20px;
  }

  .vitor {
    cursor: pointer;

    :hover {
      background-color: #eaeaea;
    }
  }

  #meu_id {
  }

  div#meu_id {
  }
`;
