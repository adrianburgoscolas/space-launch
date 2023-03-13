import {
  Text,
  Heading,
} from "@chakra-ui/react";
function Home() {
  return (
    <><Heading 
      p="10" 
      mt="12" 
      size="2xl" 
      fontWeight="extrabold"
      align="center"
      color="gray.600"
    ><Text
        bgGradient='linear(to-l, gray.200, gray.800)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >Space Launch Now
      </Text>
    </Heading></>
  )
}

export default Home;
