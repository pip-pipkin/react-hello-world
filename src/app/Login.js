import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to future state underwriting!
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
