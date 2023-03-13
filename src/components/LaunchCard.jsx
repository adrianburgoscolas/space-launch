import { 
  Card, 
  CardHeader, 
  CardBody, 
  Heading,
  Stack,
  Box,
  Text
} from '@chakra-ui/react';

function LaunchCard({name, id, launch}) {
  return (
    <>
      <Card 
        shadow="lg" 
        color="gray.600" 
        transition='all 200' 
        w={["100%", 80]}
      >
        <CardHeader>
          <Heading size='md'>{name}</Heading>
        </CardHeader>

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
            { launch?
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
              :
              <></>
          }
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default LaunchCard;
