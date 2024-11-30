import Web3 from "web3";

// Configuración del proveedor (MetaMask como ejemplo)
const web3 = new Web3(window.ethereum);

// Dirección del contrato y su ABI
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const abi = [ /* https://api-sepolia.etherscan.io/api */ ];

// Instancia del contrato
const votingContract = new web3.eth.Contract(abi, contractAddress);


async function addProposal(proposalName) {
    try {
        const accounts = await web3.eth.requestAccounts(); // Solicita cuentas del usuario
        const result = await votingContract.methods.addProposal(proposalName).send({ from: accounts[0] });
        console.log("Propuesta añadida:", result);
    } catch (error) {
        console.error("Error al añadir la propuesta:", error);
    }
}

async function addToWhitelist(address) {
    try {
        const accounts = await web3.eth.requestAccounts();
        const result = await votingContract.methods.addToWhitelist(address).send({ from: accounts[0] });
        console.log("Usuario añadido a la whitelist:", result);
    } catch (error) {
        console.error("Error al añadir a la whitelist:", error);
    }
}

async function vote(proposalId) {
    try {
        const accounts = await web3.eth.requestAccounts();
        const result = await votingContract.methods.vote(proposalId).send({ from: accounts[0] });
        console.log("Voto registrado:", result);
    } catch (error) {
        console.error("Error al votar:", error);
    }
}

console.log("El archivo JavaScript está vinculado correctamente.");

