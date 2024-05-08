import { createEcdsaKernelAccountClient } from "@zerodev/presets/zerodev"
import { encodeFunctionData, parseAbi } from "viem"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"
import { polygonMumbai } from "viem/chains"
 
// The NFT contract we will be interacting with
const contractAddress = '0x34bE7f35132E97915633BC1fc020364EA5134863'
const contractABI = parseAbi([
  'function mint(address _to) public',
  'function balanceOf(address owner) external view returns (uint256 balance)'
])
 
const main = async () => {
  // Construct a signer
  const privateKey = generatePrivateKey()
  const signer = privateKeyToAccount(privateKey)
 
  // Construct a Kernel account client
  const kernelClient = await createEcdsaKernelAccountClient({
    chain: polygonMumbai,
    projectId: 'b5486fa4-e3d9-450b-8428-646e757c10f6',
    signer,
  })
 
  const accountAddress = kernelClient.account.address
  console.log("My account:", accountAddress)
 
  // Send a UserOp
  console.log('Minting NFT...')
  await kernelClient.sendTransaction({
    to: contractAddress,
    value: BigInt(0),
    data: encodeFunctionData({
      abi: contractABI,
      functionName: "mint",
      args: [accountAddress],
    }),
  })
 
  console.log(`See NFT here: https://mumbai.polygonscan.com/address/${accountAddress}#nfttransfers`)
}
 
main()