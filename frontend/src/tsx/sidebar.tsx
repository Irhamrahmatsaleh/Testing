import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsHeart, BsHouseDoor, BsPerson, BsSearch } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

export default function Sidebar() {
  function buttonSide(iconButton: IconType, desc: string) {
    return <Button color={"white"} fontSize={"1.2rem"} _hover={{ fontWeight: "Bold" }} leftIcon={<Icon as={iconButton} />} colorScheme="white" fontWeight={"light"} variant="ghost" width={"75%"} justifyContent={"start"}>{desc}</Button>
  }
  return (
    <>
      <Flex flexDirection={"column"} margin={"1.33rem 2rem"} width={"25%"} borderEnd={"1px solid rgb(110, 110, 110, 0.333)"} justifyContent={"start"}>
        <Flex flexDirection={"column"} gap={"1rem"}>
          <Heading as={"h2"} size={"2xl"} marginBottom={"1rem"} color={"lime"}>circle</Heading>
          {buttonSide(BsHouseDoor, "Home")}
          {buttonSide(BsSearch, "Search")}
          {buttonSide(BsHeart, "Follows")}
          {buttonSide(BsPerson, "Profile")}
          <Button colorScheme="green" variant="solid" width={"90%"} borderRadius={"20px"} marginTop={"1rem"}>Create Post</Button>
        </Flex>
        <Flex mt={"18rem"}>
          {buttonSide(SlLogout, "LogOut")}
        </Flex>
      </Flex>
    </>
  );
}
