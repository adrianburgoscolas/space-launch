import dayjs from 'dayjs';
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { 
  Link,
  HStack,
  Card, 
  CardHeader, 
  CardBody, 
  Heading,
  Stack,
  Box,
  Text,
  Image,
  Flex,
  Spacer
} from '@chakra-ui/react';

function LaunchCard({fullCard, time, name, id, launch, imageUrl}) {
  return (
    <>
      <Card 
        rounded={['0','10']}
        shadow="lg" 
        color="gray.600" 
        w={["100vw",80]}
        bgGradient="linear(to-tr, cyan.100, cyan.300, blue.300)"
        _hover={!fullCard && {transform: 'scale(1.05)'}} 
        transitionDuration='0.3s'
      >
        <CardHeader>
          <Flex minH={imageUrl?16:32} direction='column' justify='between'>
            {fullCard && <Image mb='1rem' src={imageUrl} alt='Launch Image'/>}
            <Heading size='md'>{name}</Heading>
            <Spacer />
            <Box>{dayjs(time).format('MMM D, YYYY HH:mm:ss UTCZ')}</Box>
          </Flex>
        </CardHeader>

        {fullCard &&
          <CardBody>
            <Stack spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                Id
                </Heading>
                <Text pb='2' fontSize='sm'>
                {id}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                Status
                </Heading>
                <Text pb='2' fontSize='sm'>
                {launch?.status?.name}
                </Text>
                <Heading size='xs' textTransform='uppercase'>
                Mission:
                </Heading>
                <Heading size='xs' textTransform='uppercase'>
                Id
                </Heading>
                <Text pb='2' fontSize='sm'>
                {launch?.mission?.id}
                </Text>
                <Heading size='xs' textTransform='uppercase'>
                Name
                </Heading>
                <Text pb='2' fontSize='sm'>
                {launch?.mission?.name}
                </Text>
                <Heading size='xs' textTransform='uppercase'>
                Description
                </Heading>
                <Text pb='2' fontSize='sm'>
                {launch?.mission?.description}
                </Text>
              </Box>
            </Stack>
            <Link as={RouterLink} to="/">
              <HStack justify="right">
              <ArrowBackIcon />
              <Text>Back</Text>
              </HStack>
            </Link>
          </CardBody>
      }
      </Card>
    </>
  );
}

export default LaunchCard;
