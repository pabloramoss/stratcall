import React from 'react';
import {
    InputGroup,
    Flex,
    FormControl,
    FormHelperText,
    Input,
    Button,
    Box
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons'


class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <Flex justifyContent="center" pt="100px">
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputGroup>
                            <Input color="white" type='text' onChange={this.handleChange} placeholder="Buscar" />
                            <Button type="submit"><SearchIcon w={6} h={6} /></Button>
                        </InputGroup>
                        <FormHelperText>Busca la micro por agente, equipo, habilidad o mapa</FormHelperText>
                        
                    </FormControl>
                </form>
            </Flex>
        )
    }
}
export default Searchbar;