# 🔥 Ethereum Counter dApp

A simple end‑to‑end **Web3 dApp** that demonstrates how to write, deploy, and interact with an Ethereum smart contract using **Solidity**, **ethers.js**, and **MetaMask**.

This project is built for learning core blockchain concepts such as contract deployment, ABI usage, wallet connection, and testnet transactions.

---

## 🚀 Features

* ✅ Solidity smart contract (Counter)
* ✅ Deployable on **Ethereum Sepolia testnet**
* ✅ Increment, decrement, and reset counter value
* ✅ Read on‑chain state from frontend
* ✅ Write transactions via MetaMask
* ✅ Network change handling
* ✅ Built with **ethers.js v6**

---

## 🧱 Smart Contract

**Contract:** `Counter.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    int256 private value;

    function getValue() public view returns (int256) {
        return value;
    }

    function inc() public {
        value += 1;
    }

    function dec() public {
        value -= 1;
    }

    function reset() public {
        value = 0;
    }
}
```

---

## 🖥️ Frontend Tech Stack

* **HTML / CSS / JavaScript**
* **ethers.js v6**
* **MetaMask** (wallet integration)

---

## 🌐 Network

* **Ethereum Sepolia Testnet**
* Chain ID: `11155111`

⚠️ This dApp is for **testnet use only**. Do not use real ETH.

---

## 📦 Project Structure

```
.
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🛠️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/counter-dapp.git
cd counter-dapp
```

### 2️⃣ Open with a local server

Using VS Code:

* Install **Live Server** extension
* Right‑click `index.html`
* Click **Open with Live Server**

OR using Node:

```bash
npx serve .
```

---

## 🔌 MetaMask Setup

1. Install **MetaMask** browser extension
2. Enable **Show Test Networks** in MetaMask settings
3. Switch to **Ethereum Sepolia** network
4. Get free Sepolia ETH from a faucet

---

## 🔄 How It Works

1. User connects MetaMask wallet
2. Frontend creates an ethers.js provider & signer
3. Smart contract is accessed using ABI + address
4. `getValue()` reads state from blockchain
5. `inc()`, `dec()`, `reset()` send transactions
6. UI updates after transaction confirmation

---

## 🧠 Important Concepts Demonstrated

* ABI ↔ Contract interaction
* Provider vs Signer
* Read vs Write calls
* Handling network changes
* MetaMask transaction lifecycle

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📌 Future Improvements

* React / Next.js version
* Event listening
* Owner‑only functions
* Contract deployment with Hardhat
* Multi‑network support

---

## 🙌 Author

Built as a learning project to understand real‑world Web3 development.

If you find this useful, feel free to ⭐ the repo.

---

**Happy building 🚀**

