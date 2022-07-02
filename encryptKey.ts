import { ethers } from "ethers";
import * as fs from 'fs-extra';

import 'dotenv/config'

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
  const encryptedJson = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
    process.env.PRIVATE_KEY
  )
  console.log(encryptedJson)
  fs.writeFileSync('./encryptedKey.json', encryptedJson)
}


main()
  .then(() => process.exit(0))
  .catch(err => {
    console.log(err)
    process.exit(1)
  })