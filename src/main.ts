import { Connection, Keypair, PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction } from "@solana/web3.js"

import { userKeyPair, programKeyPair } from "./utils";


let connection = new Connection("http://127.0.0.1:8899");

let programId = programKeyPair().publicKey;

let payer = userKeyPair();

async function helloWorld():Promise<String> {
    
    const ix = new TransactionInstruction( { keys:[], programId } );
    const tx = new Transaction().add(ix);
    return await sendAndConfirmTransaction(connection, tx, [payer]);
}



helloWorld().then((txSig) => console.log("tx sig: ", txSig)).catch((err)=> console.error("program execution unsuccessfully", err));