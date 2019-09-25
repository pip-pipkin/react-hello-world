import React from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
const App = ({
  films,
  getFilms,
  selectedFilm
}) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to future state underwriting!
        </Typography>

        <Typography>Films {films.length}</Typography>
        <Button onClick={getFilms}>Get Films</Button>
        <Typography>Selected Film: {JSON.stringify(selectedFilm)}</Typography>
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({
  films: state.films.allFilms,
  selectedFilm: state.films.selectedFilm
})

const mapDispatchToProps = (dispatch) => {
  return{
    getFilms: () => dispatch.films.getFilms()
}}
export default connect(mapStateToProps, mapDispatchToProps)(App);
