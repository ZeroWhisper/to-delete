import React, { forwardRef } from 'react';

import { Vitor } from '../../components/Atoms/Vitor';

import { Container, Button, NewButton } from './style';

const Main = props => {
  return (
    <Container>
      <div>
        <Vitor />
      </div>
    </Container>
  );
};

export default Main;
