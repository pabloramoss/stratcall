import React from "react";
import { Link, Image, Flex, Spacer, Text, Stack } from '@chakra-ui/react';


function Donation(){

  return(
    <Flex justifyContent="center">
      <Flex direction="column" justifyContent="center" alignItems="center" my="50px" bgColor="white" width="600px" height="400px" borderRadius="30px">
        <Text width="450px">Si quieres apoyar a Valo Brain puedes hacerlo a través de donaciones<br />
        ¡Muchas gracias por pasarte!
        </Text>
        <Flex my="50px" width="400px" justifyContent="center">
          <Link href="https://www.paypal.com/donate/?hosted_button_id=5GLARW66EJFF8" target="_blank">
            <Flex alignItems="center">
              <Image height="30px" src="../../public/icon-worldwide.png"  alt="Icono Worldwide" />
              <Image ms="20px" height="60px" src="../../public/boton-paypal.png"  alt="Donar con boton de Paypal" />
            </Flex>
          </Link>
          <Spacer />
          <Link href="https://ceneka.net/mp/d/valobrain" target="_blank">
            <Flex alignItems="center">
              <Image height="30px" src="../../public/icon-argentina.png"  alt="Icono Argentina" />
              <Image ms="20px" height="60px" src="../../public/boton-mercadopago.png"  alt="Donar con boton de Mercadopago" />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
    
}

export default Donation;