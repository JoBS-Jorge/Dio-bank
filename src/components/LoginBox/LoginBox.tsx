import styled from 'styled-components';
import { 
    Button,
    Center,
    Input
  } from '@chakra-ui/react'
import { loginValidation } from '../../services/login';

export const LoginBox = () => {
    return (
        <>
            <Center>
                <h1>FAÇA O LOGIN</h1>
            </Center>
            <Input marginTop='10px' placeholder='email'/>
            <Input marginTop='10px' placeholder='password'/>
            <Button onClick={loginValidation} width='100%' marginTop='10px' size='sm' colorScheme='teal'>Entrar</Button>
        </>
    )
}