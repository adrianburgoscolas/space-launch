import {
  Center,
  Spinner,
  Heading, 
  SimpleGrid
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from "../redux/launches";
import { useEffect } from "react";
import LaunchCard from "./LaunchCard"

function Launches() {

  const launchesStatus = useSelector(state => state.launches.status);
  const launchesList = useSelector(state => state.launches.list);
  const dispatch = useDispatch();
  let list = [];

  if(launchesStatus === "succeeded"){
    list = launchesList.map(obj => <LaunchCard key={obj?.id} name={obj?.name} id={obj?.id}/>)
  }

  useEffect(() => {
    if(launchesStatus === "idle") {
      dispatch(fetchLaunches());
    }
  }, [launchesStatus, dispatch]);
  return (
    <div>
      <Heading color="gray.600" align='center' mt='12' p='5'>Upcoming Rocket Launches</Heading>
      {launchesStatus === "loading" 
        ? 
          <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='gray.500'
              size='xl'
            />
          </Center>
        :
          <></>
      }
      <Center>
        <SimpleGrid columns={[1,null,null,3]} gap='5'>{list}</SimpleGrid>
    </Center>
    </div>
  )
}

export default Launches;
