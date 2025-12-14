console.log("Counter dApp Loaded");

// -------------------------
// CONFIG
// -------------------------
const CONTRACT_ADDRESS = "0x07763C96520343913e0856F2D0586868f5F88193";

const ABI =[
	{
		"inputs": [],
		"name": "dec",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "inc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

;

let provider;
let signer;
let contract;

// -------------------------
// INIT
// -------------------------
async function init() {
  if (!window.ethereum) {
    alert("MetaMask not detected");
    return;
  }

  try {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
    const address = await signer.getAddress();

    document.getElementById("wallet").textContent =
      `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`;

    // verify contract exists
    const code = await provider.getCode(CONTRACT_ADDRESS);
  

    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    console.log("Contract initialized:", contract);

    enableButtons();
    await loadValue();

  } catch (err) {
    console.error("Init failed:", err);
    alert("Connection failed. Check console.");
  }
}

// -------------------------
// LOAD VALUE
// -------------------------
// -------------------------
// LOAD VALUE
// -------------------------
// app.js
async function loadValue() {
  try {
    const val = await contract.getValue(); // Fetched value is stored in 'val'

    // CORRECTED: Use 'val'
    document.getElementById("value").textContent = val.toString();
  } catch (err) {
    // ...
  }
}

// -------------------------
// SEND TRANSACTION
// -------------------------
async function sendTx(txFn) {
  if (!contract) {
    alert("Contract not ready");
    return;
  }

  try {
    setLoading(true);
    const tx = await txFn();
    await tx.wait();
    await loadValue();
  } catch (err) {
    console.error("Transaction error:", err);
    alert("Transaction failed");
  } finally {
    setLoading(false);
  }
}

// -------------------------
// UI HELPERS
// -------------------------
function setLoading(state) {
  const value = document.getElementById("value");

  if (state) {
    value.textContent = "⏳ Updating...";
    value.classList.add("pulse");
  } else {
    value.classList.remove("pulse");
  }
}

function enableButtons() {
  document.getElementById("incBtn").disabled = false;
  document.getElementById("decBtn").disabled = false;
  document.getElementById("resetBtn").disabled = false;
}

// -------------------------
// BUTTON EVENTS
// -------------------------
document.getElementById("incBtn").onclick = () =>
  sendTx(() => contract.inc());

document.getElementById("decBtn").onclick = () =>
  sendTx(() => contract.dec());

document.getElementById("resetBtn").onclick = () =>
  sendTx(() => contract.reset());

// -------------------------
// START APP
// -------------------------
init();
