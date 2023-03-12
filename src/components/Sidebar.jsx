import {
  VStack,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { useRef } from "react";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Box top='0' w='100%' zIndex='10' pos='fixed' bg='darkgray'>
        <IconButton 
          h='12'
          aria-label='Open Sidebar'
          icon={<HamburgerIcon />}
          variant='ghost'
          ref={btnRef} 
          onClick={onOpen}
        />
      </Box>
      <Drawer
        size='xs'
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Space Launch</DrawerHeader>

          <DrawerBody>
            <Breadcrumb>
              <VStack align='left'>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={onClose} as={Link} to='/'>
                  Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={onClose} as={Link} to='/launches'>
                  Launches List
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={onClose} as={Link} to='/details'>
                  Launch Details
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </VStack>
            </Breadcrumb>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar;
