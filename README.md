# Blockchain_Powered_E-commerce
Steps to run this project in your local system
First git clone this repository using git clone "repository url"
Open the project in vs code
Install node and npm.
open integrated terminal in backend folder.
Install ganache-cli, truffle.
Open integrated terminal in backend folder 
Run ganache-cli -1 9000000000 -p 8484 for run ethereum test server.
Now open another integrated terminal in Backend folder
Run "truffle console"
Run "truffle migrate".
Run "truffle console".
In truffle console run Supplier.address and Customer.address to get their contract address respectively.
Now paste these address in the Ethereum_setup.js file in the Frontend folder.
Now open integrated terminal in Frontend folder 
and Run npm start to run the project.
Now your web application is ready.
