import { Box, Center } from "@chakra-ui/react"
import { useEffect } from "react"
import { LoginBox } from "../LoginBox/LoginBox"
import { Header } from "../Header/Header"

export const Card = () => {

    useEffect (()=>{
        console.log("componente renderizado.")
    })

    return(
        <Box minHeight='100vh' backgroundColor='#300845' padding='32px'>
            <Header/>
            <Center>
                <Box backgroundColor='#ffffff' borderRadius='24px' padding='24px' width={"40vw"}>
                <LoginBox/>
                </Box>
            </Center>            
        </Box>
    )
}
