import React,{useContext} from 'react';
import Navbar from './Navbar';
import { Stack, Grid, Box } from '@chakra-ui/react';
import VideosContext from '../context/VideoContext';
import Body from './Body';

const App = ()=> {
    const { videos } = useContext(VideosContext);

    return (
        <Grid 
        gridTemplateAreas={{
          base: `
          "header header" 
          "body body"`, 
          sm: `
          "header header" 
          "body body"` 
          }} 
          gridTemplateColumns={{base:"60px 1fr"}} gridTemplateRows={{base: "60px 1fr"}}
        >
        <Box gridArea="header">
          <Navbar />
        </Box>
        <Stack gridArea="body">
          <Body />
        </Stack>
      </Grid>
    )
}

export default App;
