import {
  Center,
  Spinner,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails, setId } from "../redux/launches";
import LaunchCard from "./LaunchCard"
import {Heading} from '@chakra-ui/react';
import { useParams } from "react-router-dom";

function Details() {

  const launchId = useSelector(state => state.launches.id);
  const launchStatus = useSelector(state => state.launches.detailsStatus)
  const launchDetails = useSelector( state => state.launches.launch )
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if(id) {
      dispatch(setId(id))
    }
  },[id, dispatch]);

  return (
    <div>
      <Heading color="gray.600" align='center' mt='12' p='5'>Specific Data</Heading>
      <FormControl p="4">
        <VStack>
          <FormLabel>Launch Id</FormLabel>
          <Input 
            w={["100%", 96]}
            textAlign="center"
            value={launchId} 
            onChange={e => dispatch(setId(e.currentTarget.value))}
          />
          <FormHelperText>Enter a launch id to get the details.</FormHelperText>
          <Button color="gray.600" type='submit' onClick={_ => { 
            if(launchStatus === 'idle' || launchStatus === 'succeeded'){
              dispatch(fetchDetails(launchId));
            }
            dispatch(setId(''));
            }
          }>Submit</Button>
        </VStack>
      </FormControl>
      <VStack>
        {launchStatus === "loading" 
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
        {(launchDetails.id === id || launchDetails.id === "" || id === undefined) && launchStatus === "succeeded" 
          ? 
            <LaunchCard 
              launch={launchDetails} 
              name={launchDetails?.name} 
              id={launchDetails?.id}
            />
          :
            <></>
        }
    </VStack>
    </div>
  )
}

export default Details;

