import { Flex } from "@chakra-ui/react";
import Profile from "../profileCard";
import Sidebar, { sideButton } from "../sidebar";
import Threads from "./home/threads";
import { forms, profileThreads } from "./home/threadsform";
export default function profile() {
  const bgColor = '#1D1D1D'
  return (
    <Flex justifyContent={'start'} bg={bgColor} maxHeight={'733px'}>
      {Sidebar(sideButton.profile)}
      <Flex flexDirection={'column'} width={'40%'}>
        {forms(profileThreads)}
        <Threads />
      </Flex>
      <Profile />
    </Flex>
  )
}
