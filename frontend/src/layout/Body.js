import React from 'react'
import { Flex, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Asset from '../views/Asset'
import Activity from '../views/Activity'

function Body() {
  return (
      <Flex style = {{flex: 1, width: '85%', flexDirection: 'column',}}> 
      <Flex style = {{flex: 1, padding: 75, paddingLeft: 20, justifyContent: 'flex-start', alignItems: 'flex-start',}}> 
        <Box  bgGradient='linear(to-r, #976781, #B0624E, #EACEA8)' style = {{borderRadius: 100, height: 100, width: 100}}> </Box>
           <Text fontSize='6xl' color = "white" style = {{letterSpacing: "4px", marginLeft: 50}}> Holding Company Sample </Text>
        </Flex>
    <Tabs variant={"line"} color ="white" colorScheme={"orange"} size = "lg">
    <TabList>
        <Tab style = {{fontWeight: 'bold', letterSpacing: '3px'}}>ASSETS</Tab>
        <Tab style = {{fontWeight: 'bold', letterSpacing: '3px'}}>ACTIVITY</Tab> 
    </TabList>
    <br/>
    <TabPanels>
        <TabPanel> 
            <Asset />
        </TabPanel>


        <TabPanel>
            <Activity />
        </TabPanel> 

    </TabPanels>
    </Tabs>
    </Flex>
  )
}

export default Body