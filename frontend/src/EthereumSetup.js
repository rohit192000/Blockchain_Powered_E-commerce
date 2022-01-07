import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8484"));

let supplierAddress = '0x773770269Ddc88e0C324B75EFB2c03a2b9f7F242';
let customerAddress = '0x67D6D904307d5173f86c27162101b9d1ef8ADb00';

let supplierABI = [{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "idItem",
		"type": "uint256"
	}],
	"name": "ItemAdded",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "idOfCustomer",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "idOrder",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "status",
		"type": "bool"
	}],
	"name": "ProcessAnOrder",
	"type": "event"
}, {
	"constant": false,
	"inputs": [{
		"name": "itemName",
		"type": "bytes32"
	}, {
		"name": "price",
		"type": "uint256"
	}],
	"name": "addItem",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "idOrder",
		"type": "uint256"
	}, {
		"name": "idCustomer",
		"type": "uint256"
	}],
	"name": "processOrder",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "idItem",
		"type": "uint256"
	}],
	"name": "getItem",
	"outputs": [{
		"name": "",
		"type": "bytes32"
	}, {
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "idOrder",
		"type": "uint256"
	}],
	"name": "getStatus",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getTotalNumberOfAvailableItems",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getTotalNumberOfOrdersProcessed",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}];

let customerABI = [{
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "idOrder",
		"type": "uint256"
	}],
	"name": "OrderRaisedOrUpdated",
	"type": "event"
}, {
	"constant": false,
	"inputs": [{
		"name": "itemName",
		"type": "bytes32"
	}, {
		"name": "quantity",
		"type": "uint256"
	}],
	"name": "purchaseItem",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "idOrder",
		"type": "uint256"
	}],
	"name": "recieveItem",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "idOrder",
		"type": "uint256"
	}],
	"name": "getOrderDetails",
	"outputs": [{
		"name": "",
		"type": "bytes32"
	}, {
		"name": "",
		"type": "uint256"
	}, {
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getNumberOfItemsPurchased",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "getNumberOfItemsReceived",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}];

web3.eth.defaultAccount = web3.eth.accounts[0];

const supplierContract = web3.eth.contract(supplierABI).at(supplierAddress);
const customerContract = web3.eth.contract(customerABI).at(customerAddress);

export {
    supplierContract,
    customerContract,
    web3
};