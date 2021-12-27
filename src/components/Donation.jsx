import React from "react";
import { Link, Image, Flex, Spacer, Text, Heading } from '@chakra-ui/react';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Donation = () => {

  return(
    <Flex direction="column" height="100vh">
      <Navbar />
      <Flex pt="150px" justifyContent="center">
        <Flex direction="column" justifyContent="center" alignItems="center" my="50px" bgColor="white" width="65vw" height="400px" borderRadius="30px">
          <Text fontSize={{base:"11px",md:"15px"}}width="60vw">Si quieres apoyar a Valo Brain puedes hacerlo a través de donaciones mediante MercadoPago (Argentina) o con Paypal.
          </Text>
          <Heading textAlign="center" mt="30px" fontSize={{base:"15px",md:"20px"}}>Muchas gracias por pasarte!</Heading>
          <Flex direction={{base:"column", md:"row"}} my="50px" width="450px" alignItems="center" justifyContent="center">
            <Link href="https://www.paypal.com/donate/?hosted_button_id=5GLARW66EJFF8" target="_blank">
              <Flex alignItems="center">
                <Image height="30px" src="../../public/icon-worldwide.png"  alt="Icono Worldwide" />
                <Image ms="20px" height={{base:"30px",md:"60px"}} src="../../public/boton-paypal.png"  alt="Donar con boton de Paypal" />
              </Flex>
            </Link>
            <Spacer />
            <Link my="5px" href="https://ceneka.net/mp/d/valobrain" target="_blank">
              <Flex alignItems="center">
                <Image height="30px" src="../../public/icon-argentina.png"  alt="Icono Argentina" />
                <Image ms="20px" width={{base:"79px", md:"158px"}} height={{base:"30px",md:"60px"}}src="../../public/boton-mercadopago.png"  alt="Donar con boton de Mercadopago" />
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
      <Footer />
    </Flex>
  )
    
}

export default Donation;