import { Flex } from "@chakra-ui/react";
import Threads from "../component/threads";
import { forms, otherProfileThreads } from "../component/threadsform";
import Sidebar, { sideButton } from "../component/sidebar";
import Profile from "../component/profileCard";
import React from "react";

export default function status ()
{
    const bgColor = '#1D1D1D'
    return (
        <Flex justifyContent={'start'} bg={bgColor} maxHeight={'733px'}>
        {Sidebar(sideButton.home)}
        <Flex flexDirection={'column'} width={'40%'}>
        {forms(otherProfileThreads)}
        <Threads />
        </Flex>
        <Profile />
        </Flex>
    )
}