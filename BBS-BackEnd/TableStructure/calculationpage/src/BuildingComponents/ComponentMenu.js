import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function ComponentMenu() {
  return (
    <Container className='button-container'>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Footing
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Column
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Plint Beam
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Lintel & Chejja
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Floor Beam
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        Slab
      </Button>
      <Button variant="secondary" style={{ margin: '0 5px' }}>
        StairCase
      </Button>
    </Container>
  );
}

