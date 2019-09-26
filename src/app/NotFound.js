import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Oh No! Not Found!
        </Typography>
      </Box>

    </Container>
  );
}

export default NotFound;
