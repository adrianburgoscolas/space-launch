import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text
} from '@chakra-ui/react';

function LaunchCard({name, launchid}) {
  return (
    <>
      <Card _hover={{transform: "scale(1.05)"}} transition='all 200' w="100%">
        <CardHeader>
          <Heading size='md'>{name}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Id
              </Heading>
              <Text pt='2' fontSize='sm'>
                {launchid}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default LaunchCard;
