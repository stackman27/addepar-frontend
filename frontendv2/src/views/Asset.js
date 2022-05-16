import React from 'react'
import { Flex, Grid, Text, Box, Tabs, TabList, TabPanels, TabPanel, Tab, TableContainer, Table, Tr, Th,TableCaption, Thead, Tbody, Td, Image } from '@chakra-ui/react'

function Asset() {
    
    const all_asset_data = [
        {
            "company": "SnowBear",
            "cost_basis": 3000000, 
            "current_value": 1500000,
        },
        {
            "company": "Snowflake",
            "cost_basis": 3000000, 
            "current_value": 1500000,
        },
        {
            "company": "GoldenBear",
            "cost_basis": 3000000, 
            "current_value": 1500000,
        },        
    ]

    const real_estate_data = [
        
            {
                "img": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYA3n7gkpsOlaKZOyElGf9ph5g0MgoqxU-Q&usqp=CA')",
                "cost_basis": 3000000, 
                "name": "SnowBear",
            },
            {
                "img": "Snowflake",
                "cost_basis": 3000000, 
                "name": "GoldenBear",
            },
            {
                "img": "GoldenBear",
                "cost_basis": 3000000, 
                "name": "Snowflake",
            },     
            {
                "img": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYA3n7gkpsOlaKZOyElGf9ph5g0MgoqxU-Q&usqp=CA')",
                "cost_basis": 3000000, 
                "name": "Snowflake",
            },
            {
                "img": "Snowflake",
                "cost_basis": 3000000, 
                "name": "Snowflake",
            },
            {
                "img": "GoldenBear",
                "cost_basis": 3000000, 
                "name": "Snowflake",
            }, 
    ]
    

  return (
    <Tabs variant='soft-rounded' colorScheme={'orange'} >
        <TabList>
            <Tab>All Assets</Tab>
            <Tab>Private Equity</Tab>
            <Tab>Real Estates</Tab>
            <Tab>Hedge funds</Tab>
        </TabList>  

        <br/>  

        <TabPanels>


        <TabPanel>
            <Text fontSize='2xl' color={"white"} fontWeight="bold"> Private Equity </Text>
            <AssstTable asset_data = {all_asset_data}/>
            <br/>
            <br/>

            <Text fontSize='2xl' color={"white"} fontWeight="bold"> Real Estate </Text>
            <br/>
            <RealEstate real_estate_data = {real_estate_data}/>
        </TabPanel>
        
        
        <TabPanel>
            <Text fontSize='2xl' color={"white"} fontWeight="bold"> Private Equity </Text>
            <br/>
            <AssstTable asset_data = {all_asset_data}/>
        </TabPanel>


        <TabPanel>
            <Text fontSize='2xl' color={"white"} fontWeight="bold"> Real Estate </Text>
            <br/>
            <RealEstate real_estate_data = {real_estate_data}/>
        </TabPanel>
        

        <TabPanel>
            <p>two!</p>
        </TabPanel>


        </TabPanels>
    </Tabs>
  )
}





function AssstTable({asset_data}) {
    return(
    <TableContainer color = "white">
  <Table variant='simple'> 
    
    <Thead>
      <Tr>
        <Th>Company</Th>
        <Th>Cost Basic</Th>
        <Th>Current Value</Th>
      </Tr>
    </Thead>
    <Tbody>
        {asset_data.map((item, index) => (  
        <Tr>
            <Td>{item.company}</Td>
            <Td>{item.cost_basis} USD</Td>
            <Td >{item.current_value} USD</Td> 
        </Tr>
      ))}
    </Tbody> 
  </Table>
</TableContainer>
    )
}

function RealEstate({real_estate_data}) {
    return( 
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {real_estate_data.map((item, index) => ( 
            <Box  style = {{borderColor: 'gray', borderRadius: 10, borderWidth: 1, height: 300, width: 300, padding: 20, color: 'white'}}          
                backgroundImage={item.img}
                backgroundSize={"cover"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"  

            >

            <Text opacity={1} color = "white"> {item.cost_basis} USD </Text>
            <Text opacity={1} color = "white"> {item.name}</Text>

            </Box>
        ))}
        </Grid>
    )
}


export default Asset