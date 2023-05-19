import {
  Box,
  Center,
  Spinner,
  Heading, 
  Wrap,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from "../redux/launches";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import LaunchCard from "./LaunchCard"

function Launches() {

  const launchesError = useSelector(state => state.launches.error);
  const launchesStatus = useSelector(state => state.launches.status);
  const launchesList = useSelector(state => state.launches.list);
  const dispatch = useDispatch();
  let list = launchesList?.map(obj => <Link key={obj?.id} to={`/${obj.id}`}><LaunchCard time={obj?.net} name={obj?.name}/></Link>)

//  useEffect(() => {
//    console.log(launchesStatus, launchesError, launchesList);
//  });
  useEffect(() => {
    if(launchesStatus === "idle") {
      dispatch(fetchLaunches());
    }
  }, [launchesStatus, dispatch]);
  return (
    <Box p={[0,'1rem']} maxW='80rem' mx='auto'>
      <Heading color="gray.600" align='center' mt='12' p='5'>Upcoming Rocket Launches</Heading>
     {launchesStatus === "loading" &&
          <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='gray.500'
              size='xl'
            />
          </Center>
      } 
      {launchesError ? 
        <Center>{launchesError}</Center>
        :
        <Center>
          <Wrap p='1rem' justify='center' spacing='1rem'>{list}</Wrap>
        </Center>
      }
      
    </Box>
  )
}

export default Launches;
