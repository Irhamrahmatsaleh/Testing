import { Box, Button, Flex, HStack, Heading, Image, Link, Text } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import f from './function';
const color = {
  grey: '#909090',
  greyCard: '#262626'
}
export default function Profile() {
  const profile =
    <Flex flexDirection={'column'} bgColor={color.greyCard} alignItems={'start'} width={'90%'} borderRadius={'14px'} justifyContent={'space-around'} height={'45%'} py={'1rem'}>
      <Heading as={'h3'} size={'md'} marginStart={'1.33rem'} mb={'1rem'} color={'whitesmoke'} fontWeight={'medium'}>My Profile</Heading>
      <Box width={'90%'} marginX={'auto'} height={'42%'} mb={'1rem'}>
        <Image src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={'720px'} height={'80px'} objectFit={'cover'} borderRadius={'12px'} />
        <Image borderRadius={'50%'} width={'64px'} height={'64px'} objectFit={'cover'} src={'https://scontent.fcgk4-5.fna.fbcdn.net/v/t39.30808-6/435300569_1101854034378925_7965224793727079952_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHb4mHG3vMn8S9RNRU_Zd84jeTI4VswWOGN5MjhWzBY4YhjCbiXGcuS7wv2gJkzk2y7zoR4tONRV62AEUAwAnJI&_nc_ohc=DBwO9BnMKqwQ7kNvgEaQa-e&_nc_zt=23&_nc_ht=scontent.fcgk4-5.fna&_nc_gid=ATId5ykA2xskfVxF4XCooCx&oh=00_AYA6x7_ITJPkurcv9vlWRB1XsYk7rAYHmyd6X_4S8e_4Hw&oe=6716EF66'} zIndex={4} position={'relative'} top={'-2rem'} left={'1rem'} border={`4px solid ${color.greyCard}`} />
        <Button colorScheme='gray' size={'sm'} variant='outline' color={'white'} zIndex={4} position={'relative'} top={'-3rem'} left={'16rem'} borderRadius={'14px'}>Edit Profile</Button>
      </Box>
      <Flex flexDirection={'column'} alignItems={'start'} width={'90%'} marginX={'auto'} gap={'0.33rem'}>
        <Heading as={'h3'} size={'md'} color={'whitesmoke'}>Irham Rahmat S</Heading>
        <Text fontSize={'1rem'} color={color.grey}>@bag-user</Text>
        <Text color={'white'}>Not all who wander are lost</Text>
      </Flex>
      <Flex justifyContent={'start'} width={'90%'} gap={'0.33rem'} marginX={'auto'} color={'white'} fontSize={'small'}>
        <Text fontWeight={'bold'}>229</Text>
        <Text me={'0.33rem'} color={color.grey}>Following</Text>
        <Text fontWeight={'bold'}>344</Text>
        <Text color={color.grey}>Followers</Text>
      </Flex>
    </Flex>
  const suggested =
    <Flex flexDirection={'column'} bgColor={color.greyCard} width={'90%'} pt={'1rem'} borderRadius={'14px'}>
      <Heading as={'h3'} size={'md'} marginStart={'1.33rem'} mb={'1rem'} color={'whitesmoke'} fontWeight={'medium'}>Suggested For You</Heading>
      <Flex flexDirection={'column'} marginStart={'1.33rem'} mt={'1rem'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'90%'} mb={'1rem'}>
          <Flex>
            {f.imageCircle('https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '40px')}
            <Flex flexDirection={'column'} ms={'1rem'}>
              <Text color={'white'}>Irham Rahmat S</Text>
              <Text fontSize={'1rem'} color={color.grey}>@bag-user</Text>
            </Flex>
          </Flex>
          <Button justifySelf={'end'} colorScheme='gray' size={'sm'} variant='outline' color={'white'} borderRadius={'14px'}>Follow</Button>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'90%'} mb={'1rem'}>
          <Flex>
            {f.imageCircle('https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '40px')}
            <Flex flexDirection={'column'} ms={'1rem'}>
              <Text color={'white'}>Irham Rahmat S</Text>
              <Text fontSize={'1rem'} color={color.grey}>@bag-user</Text>
            </Flex>
          </Flex>
          <Button justifySelf={'end'} colorScheme='gray' size={'sm'} variant='outline' color={'gray'} borderColor={'gray'} borderRadius={'14px'}>Following</Button>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'90%'} mb={'1rem'}>
          <Flex>
            {f.imageCircle('https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '40px')}
            <Flex flexDirection={'column'} ms={'1rem'}>
              <Text color={'white'}>Irham Rahmat S</Text>
              <Text fontSize={'1rem'} color={color.grey}>@bag-user</Text>
            </Flex>
          </Flex>
          <Button justifySelf={'end'} colorScheme='gray' size={'sm'} variant='outline' color={'white'} borderRadius={'14px'}>Follow</Button>
        </Flex>
      </Flex>
    </Flex>
  const watermark =
    <Flex flexDirection={'column'} bgColor={color.greyCard} width={'90%'} py={'1rem'} borderRadius={'14px'}>
      <Flex ms={'1.33rem'} alignItems={'center'} mb={'0.2rem'}>
        <Flex alignItems={'center'} me={'0.3rem'}>
          <Text fontSize={'0.9rem'} color={'white'} me={'0.2rem'}>Developed By</Text>
          <Text fontSize={'0.9rem'} color={'white'} fontWeight={'bold'} me={'0.3rem'}>Irham Rahmat S</Text>
          <Text fontSize={'0.9rem'} color={color.grey}>•</Text>
        </Flex>
        <Flex gap={'0.5rem'}>
          <Link fontSize={'0.9rem'} color={color.grey}><BsGithub></BsGithub></Link>
          <Link fontSize={'0.9rem'} color={color.grey}><BsLinkedin></BsLinkedin></Link>
          <Link fontSize={'0.9rem'} color={color.grey}><BsFacebook></BsFacebook></Link>
          <Link fontSize={'0.9rem'} color={color.grey}><BsInstagram></BsInstagram></Link>
        </Flex>
      </Flex>
      <Flex ms={'1.33rem'} alignItems={'center'}>
        <HStack>
          <Text fontSize={'0.7rem'} color={color.grey}>Powered by </Text>
          <Image src="/Red.svg"></Image>
          <Text fontSize={'0.7rem'} color={color.grey}>DumbWays Indonesia </Text>
          <Text fontSize={'0.9rem'} color={color.grey} mr="5px">•</Text>
        </HStack>
        <Link fontSize={'0.7rem'} color={color.grey}>  #1 Coding Bootcamp</Link>
      </Flex>
    </Flex>
  return (
    <>
      <Flex flexDirection={'column'} gap={'1rem'} alignItems={'center'} width={'30%'} borderStart={'1px solid rgb(110, 110, 110, 0.333)'} marginStart={'2rem'} marginTop={'2rem'}>
        {profile}
        {suggested}
        {watermark}
      </Flex>
    </>
  )
}
