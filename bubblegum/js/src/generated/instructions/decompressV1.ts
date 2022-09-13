/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { MetadataArgs, metadataArgsBeet } from '../types/MetadataArgs'

/**
 * @category Instructions
 * @category DecompressV1
 * @category generated
 */
export type DecompressV1InstructionArgs = {
  metadata: MetadataArgs
}
/**
 * @category Instructions
 * @category DecompressV1
 * @category generated
 */
export const decompressV1Struct = new beet.FixableBeetArgsStruct<
  DecompressV1InstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['metadata', metadataArgsBeet],
  ],
  'DecompressV1InstructionArgs'
)
/**
 * Accounts required by the _decompressV1_ instruction
 *
 * @property [_writable_] voucher
 * @property [_writable_, **signer**] leafOwner
 * @property [_writable_] tokenAccount
 * @property [_writable_] mint
 * @property [] mintAuthority
 * @property [_writable_] metadata
 * @property [_writable_] masterEdition
 * @property [] sysvarRent
 * @property [] tokenMetadataProgram
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category DecompressV1
 * @category generated
 */
export type DecompressV1InstructionAccounts = {
  voucher: web3.PublicKey
  leafOwner: web3.PublicKey
  tokenAccount: web3.PublicKey
  mint: web3.PublicKey
  mintAuthority: web3.PublicKey
  metadata: web3.PublicKey
  masterEdition: web3.PublicKey
  systemProgram?: web3.PublicKey
  sysvarRent: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
}

export const decompressV1InstructionDiscriminator = [
  54, 85, 76, 70, 228, 250, 164, 81,
]

/**
 * Creates a _DecompressV1_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DecompressV1
 * @category generated
 */
export function createDecompressV1Instruction(
  accounts: DecompressV1InstructionAccounts,
  args: DecompressV1InstructionArgs,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY')
) {
  const [data] = decompressV1Struct.serialize({
    instructionDiscriminator: decompressV1InstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.voucher,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.leafOwner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarRent,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
