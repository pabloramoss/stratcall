import React, {useState} from 'react';
import {
    InputGroup,
    Flex,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons'


const Searchbar = (props)=> {
	const [search, setSearch] = useState("")
    const handleChange = (event) => {
        setSearch({
            term: event.target.value
        });
    
    };
    const handleSubmit = event => {
        event.preventDefault();
		props.handleFormSubmit(search.term)
        console.log("enviando", search.term)
    }
        
    return (
        <Flex justifyContent="center" pt="100px">
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputGroup>
                        <Input color="white" type='text' onChange={handleChange} placeholder="Buscar" />
                        <Button type="submit"><SearchIcon w={6} h={6} /></Button>
                    </InputGroup>                        
                </FormControl>
            </form>
        </Flex>
    )
}
export default Searchbar;