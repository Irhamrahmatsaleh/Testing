import { ChakraProvider, Flex } from "@chakra-ui/react";
import Profile from "./profile";
import Sidebar from "./sidebar";
import Threads from "./threads";

export default function App() {
  const bgColor = "#1D1D1D";
  return (
    <ChakraProvider>
      <Flex justifyContent={'start'} bg={bgColor} maxHeight={'733px'}>
        <Sidebar />
        <Threads />
        <Profile />
      </Flex>
    </ChakraProvider>
  )
}
