import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <>
      <Box  display={["none", "block"]}p="4" bg="gray.100" top='0' w='100%' zIndex='10' pos='fixed'>
        <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/'>
              Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink  as={Link} to='/launches'>
              Launches List
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to='/details'>
              Launch Details
              </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  )
}

export default Sidebar;

