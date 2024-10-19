import { Flex } from "@chakra-ui/react";
import Profile from "../profileCard";
import Sidebar, { sideButton } from "../sidebar";
import Threads from "./home/threads";
import { forms, threadsForm } from "./home/threadsform";
export default function home() {
  const bgColor = '#1D1D1D'
  return (
    <Flex justifyContent={'start'} bg={bgColor} maxHeight={'733px'}>
      {Sidebar(sideButton.home)}
      <Flex flexDirection={'column'} width={'40%'}>
        {forms(threadsForm)}
        <Threads />
      </Flex>
      <Profile />
    </Flex>
  )
}
