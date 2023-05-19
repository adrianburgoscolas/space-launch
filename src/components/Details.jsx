import {
  Center,
  Spinner,
  VStack,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from "../redux/launches";
import LaunchCard from "./LaunchCard"
import {Heading} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Details() {

  const launchStatus = useSelector(state => state.launches.detailsStatus)
  const launchDetails = useSelector( state => state.launches.launch )
  const launchError = useSelector( state => state.launches.detailsError )
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log('details', launchStatus, id);

  useEffect(() => {
      dispatch(fetchDetails(id));
  }, [id, dispatch]);

  return (
    <div>
      <Heading color="gray.600" align='center' mt='12' p='5'> Details</Heading>
      <VStack>
        {launchStatus === "failed" && <Center>{launchError}</Center>}
        {launchStatus === "loading" &&
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
        {launchStatus === "succeeded" &&
            <LaunchCard 
              launch={launchDetails} 
              name={launchDetails?.name} 
              id={launchDetails?.id}
              imageUrl={launchDetails?.image_url || launchDetails?.rocket.configuration.image_url}
              fullCard={true}
            />
        }
    </VStack>
    </div>
  )
}

export default Details;

