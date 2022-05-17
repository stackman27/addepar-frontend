import React, {useState} from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import {ethers} from 'ethers'

const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [isWalletConnected, setWalletConnected] = useState(false);
	 

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				getAccountBalance(result[0]);
				setWalletConnected(true)
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
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


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
		<div className='walletCard'>
			{!isWalletConnected ? 
	 		<Button bgGradient='linear(to-r, #976781, #B0624E, #EACEA8)' color='white' onClick={connectWalletHandler}>Connect Wallet</Button>
			:
			<Button bgGradient='linear(to-r, #976781, #B0624E, #EACEA8)' color='white'>{defaultAccount.substring(0, 5)+'...'+defaultAccount.slice(-5)}</Button>
			}
		</div>
	);
}

export default WalletCard;