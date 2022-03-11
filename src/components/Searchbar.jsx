import React, {useState, useContext} from 'react';
import {
    Stack,
    Flex,
    Input,
    Button,
  } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import VideosContext from '../context/VideoContext';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

function Searchbar() {
    const [search, setSearch] = useState("");
    const [displayInput, setDisplayInput] = useState("flex");
    const { youtubeSearch } = useContext(VideosContext);
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname!=="/") {
            setDisplayInput("none")
        }
    },[])

    const handleChange = (event) => {
        setSearch({
            term: event.target.value
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        youtubeSearch(search.term);
    };

    return (
        <Stack>
            <form onSubmit={handleSubmit}>
                <Flex display={displayInput}>
                    <Input minW={{base: "auto", lg: "500px"}} color="white" type='text' onChange={handleChange} placeholder="Buscar" />
                    <Button type="submit"><SearchIcon w={6} h={6} /></Button>
                </Flex>
            </form>
        </Stack>
    );
}
export default Searchbar;