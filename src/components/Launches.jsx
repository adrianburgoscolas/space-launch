import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from "../redux/launches";
import { useEffect } from "react";
import LaunchCard from "./LaunchCard"
import {Heading, VStack} from '@chakra-ui/react';

function Launches() {

  const launchesStatus = useSelector(state => state.launches.status);
  const launchesList = useSelector(state => state.launches.list);
  const dispatch = useDispatch();
  let list = [];

  if(launchesStatus === "succeeded"){
    list = launchesList.map(obj => <LaunchCard key={obj.id} name={obj.name} id={obj.id}/>)
  }

  useEffect(() => {
    console.log(launchesStatus)
    if(launchesStatus === "idle") {
      dispatch(fetchLaunches());
    }
  }, [launchesStatus, dispatch]);
  useEffect(() => console.log(launchesList))
  return (
    <div>
      <Heading color="gray.600" align='center' mt='12' p='5'>Upcoming Rocket Launches</Heading>
      <VStack spacing='5'>{list}</VStack>
    </div>
  )
}

export default Launches;
