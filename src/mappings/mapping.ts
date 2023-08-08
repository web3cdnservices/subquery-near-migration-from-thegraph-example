import { BlockEvent } from "../types";
import {
  NearBlock,
} from "@subql/types-near";

export async function handleBlock(block: NearBlock): Promise<void> {
  logger.info(`Handling block ${block.header.height}`);


  const blockRecord = BlockEvent.create({
    id: block.header.height.toString(),
    number: BigInt(block.header.height),
    hash: block.header.hash,
    timestampNanosec: BigInt(block.header.timestamp_nanosec),
    gasPrice: BigInt(block.header.gas_price)
  });

  await blockRecord.save();
}
