import React from 'react'
import { Flex, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel, background } from '@chakra-ui/react'


export default function Portfolio() {
  return (
    <Flex style = {{flex: 1, width: '100%', flexDirection: 'column',}}> 
    <Flex style = {{flex: 1, padding: 75, paddingLeft: 20, justifyContent: 'flex-start', alignItems: 'flex-start',}}> 
      <Box  bgGradient='linear(to-r, #976781, #B0624E, #EACEA8)' style = {{borderRadius: 100, height: 100, width: 100}}> </Box>
         <Text fontSize='6xl' color = "white" style = {{letterSpacing: "4px", marginLeft: 50}}> Wallet Sample </Text>
      </Flex>
  <Tabs variant={"line"} color ="white" colorScheme={"orange"} size = "lg" width={"100%"}>
  <TabList>
      <Tab style = {{fontWeight: 'bold', letterSpacing: '3px'}}>YOUR WALLET</Tab> 
  </TabList>
  <br/>
  <TabPanels>
      <TabPanel> 
        <Flex style = {{width: '100%',justifyContent: 'space-between',}}>  
        <Flex style = {{flexDirection: 'column', width: '50%'}}> 
          <CardComp />
          <br/> <br/>
          <KeyStatistics />
        </Flex>
        <Flex style = {{flexDirection: 'column', width: '45%',}}>
          <HoldingCompanyCard />
        </Flex>
        </Flex>
      </TabPanel>
  </TabPanels>
  </Tabs>
  </Flex>
  )
}





function CardComp() {
  return (
    <Flex style = {{flexDirection: 'row',}}>
      <Flex style  = {{flexDirection: 'column', padding: 25, background: '#222222', borderRadius: 20}}>
        <Text fontSize='1xl' color={"gray"} fontWeight="bold"> Total Invested </Text>
        <Text fontSize='4xl' fontWeight={"bold"} letterSpacing = "wider">$5,224,131 USD</Text> 
      </Flex>

      <Flex style = {{flexDirection: 'column', padding: 25, background: '#222222', borderRadius: 20, marginLeft: 50}}>
        <Text fontSize='1xl' color={"gray"} fontWeight="bold"> Current Wallet Value </Text>
        <Text fontSize='4xl' fontWeight={"bold"} letterSpacing = "wider">$123,131 USD</Text> 
      </Flex>
    </Flex>
  )
}


function KeyStatistics() {
  return (
    <Flex>
       <Flex style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "100%",}}>
       <Text  fontSize='2xl' color={"white"} fontWeight="bold"> Key Statistics </Text>
        <br/>
        <Flex style = {{flexDirection: 'row', justifyContent: 'space-between'}} width = "80%">
         
          <Flex style = {{flexDirection: 'column', lineHeight: 2}}> 
            <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Asset Spread </Text>
            <Text  fontSize='1xl' > 20% Private Equity </Text>
            <Text  fontSize='1xl' > 10% Real Estate</Text>
            <Text  fontSize='1xl' > 5% Hedge Fund </Text>
            <Text  fontSize='1xl' > 2% Stocks </Text>
          </Flex>

              
          <Flex style = {{flexDirection: 'column', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Asset </Text>
              <Text  fontSize='1xl'> 6090 Unique Assets </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Net return </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>


        </Flex>

      </Flex>
    </Flex>
  )
}



function HoldingCompanyCard() {
  return (
    <> 
    <Flex  style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "90%",}} >
      <Text fontSize='2xl' color={"white"} fontWeight = {"semibold"}> Holding Company 1 </Text>
      
      <Flex style = {{flexDirection: 'row',  justifyContent: 'space-between', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Invested </Text>
              <Text  fontSize='1xl'> $60,990 </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Ownership shares </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>
      
           
    </Flex>
    <br/>
    <Flex  style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "90%",}} >
      <Text fontSize='2xl' color={"white"} fontWeight = {"semibold"}> Holding Company 1 </Text>
      
      <Flex style = {{flexDirection: 'row',  justifyContent: 'space-between', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Invested </Text>
              <Text  fontSize='1xl'> $60,990 </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Ownership shares </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>
      
           
    </Flex>
    <br/>
    <Flex  style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "90%",}} >
      <Text fontSize='2xl' color={"white"} fontWeight = {"semibold"}> Holding Company 1 </Text>
      
      <Flex style = {{flexDirection: 'row',  justifyContent: 'space-between', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Invested </Text>
              <Text  fontSize='1xl'> $60,990 </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Ownership shares </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>
      
           
    </Flex>
    <br/>
    <Flex  style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "90%",}} >
      <Text fontSize='2xl' color={"white"} fontWeight = {"semibold"}> Holding Company 1 </Text>
      
      <Flex style = {{flexDirection: 'row',  justifyContent: 'space-between', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Invested </Text>
              <Text  fontSize='1xl'> $60,990 </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Ownership shares </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>
      
           
    </Flex>
    <br/>
    <Flex  style  = {{flexDirection: 'column', padding: 35, background: '#222222', borderRadius: 20, width: "90%",}} >
      <Text fontSize='2xl' color={"white"} fontWeight = {"semibold"}> Holding Company 1 </Text>
      
      <Flex style = {{flexDirection: 'row',  justifyContent: 'space-between', lineHeight: 2}}> 
            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Total Invested </Text>
              <Text  fontSize='1xl'> $60,990 </Text>
            </Flex>

            <Flex style = {{flexDirection: 'column', height: 100}}> 
              <Text  fontSize='2xl' color={"gray"} fontWeight = {"bold"}> Ownership shares </Text>
              <Text  fontSize='1xl'> 162,976.5 (+24%) </Text>
            </Flex>

          </Flex>
      
           
    </Flex>
    </>
  )
}