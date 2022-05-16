import React from 'react'
import { Input, Select, HStack, Badge, Flex, Square, Box, TableContainer, Table, Tr, Th, TableCaption, Thead, Tbody, Td, Image } from '@chakra-ui/react'
function Activity() {
    const all_activity_data = [
        {
            "type": "Commitment",
            "amount": 44000,
            "address": "2098457...345",
            "date": "04/03/2022"
        },
        {
            "type": "Distribution",
            "amount": 4000,
            "address": "303485670...645",
            "date": "04/02/2022"
        },
        {
            "type": "Interest Exp",
            "amount": 1000,
            "address": "21234098...574",
            "date": "03/31/2022"
        },
        {
            "type": "Edge Fee",
            "amount": 1000,
            "address": "2038475230...894",
            "date": "03/22/2022"
        },
        {
            "type": "Adjustment",
            "amount": 1000,
            "address": "02938475202...348",
            "date": "03/17/2022"
        },
        {
            "type": "Commitment",
            "amount": 1000,
            "address": "345634566...456",
            "date": "03/01/2022"
        },
        {
            "type": "Commitment",
            "amount": 31000,
            "address": "3764535333...345",
            "date": "02/10/2022"
        },
    ]
    return (
        <Flex style = {{flex: 1, flexDirection: 'column', }}> 
            <HStack>
            <Select placeholder='Filter: everything' color="gray" w="300px">
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Input placeholder='Search activity' w="300px"/>
            </HStack>
            <br/>

            <TableContainer color="white" >
                <Table variant='simple' size={"lg"}>
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th>Amount</Th>
                            <Th>Address</Th>
                            <Th>Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {all_activity_data.map((item, index) => (
                            <Tr>
                                <Td>{<Badge variant="outline" color="white">{item.type}</Badge>}</Td>
                                <Td>{item.amount} USD</Td>
                                <Td color="gray"> actioned by {item.address} </Td>
                                <Td color="gray">{item.date} </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
export default Activity