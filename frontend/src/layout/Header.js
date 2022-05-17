import {React, useState} from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import { ethers } from 'ethers';
import WalletCard from '../components/WalletCard';

function Header() {
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	
  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask connected!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
				console.log("Wallet connected")
			})
			.catch(error => {
				console.log("ERROR happened")
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}
  const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}
  return (
    <Flex style = {{flex: 1, width: '100%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', padding: 20, justifyContent: 'space-between',}}>
        <Flex style = {{width: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>  
        <Link
                    
                    to = {"/home"}
                    style = {{fontSize: 24,  color: 'white'}}
                >
                Home
        </Link>

        <Link
                    
                    to = {"/portfolio"}
                    style = {{fontSize: 24,  color: 'white'}}
                >
                    Portfolio
                </Link>
        </Flex>

		<WalletCard />
      
        {/* <Button bgGradient='linear(to-r, #976781, #B0624E, #EACEA8)' color='white' onClick={connectWalletHandler}>Connect Wallet</Button> */}
    </Flex>
  )
}


export default Header
 