import { Protobuf } from "as-proto/assembly";
import {
  SetOraclePrice as protoSetOraclePrice
} from "./pb/sf/substreams/injective/oracle/v1/SetOraclePrice";
import { SetOraclePrice } from "../generated/schema";
import { BigDecimal, log, crypto, Bytes} from "@graphprotocol/graph-ts";

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<protoSetOraclePrice>(bytes, protoSetOraclePrice.decode);

  // The input has been hashed to create a unique ID, replace it with the field you want to use as ID

  const inputHash = crypto.keccak256(Bytes.fromUint8Array(bytes)).toHexString();
  let entity = new SetOraclePrice(inputHash);
  entity.price_id = input.priceId
  entity.ema_price = BigDecimal.fromString(input.emaPrice.toString())
  entity.ema_conf = BigDecimal.fromString(input.emaConf.toString())
  entity.conf = BigDecimal.fromString(input.conf.toString())
  entity.publish_time = input.publishTime

  if (input.priceState != null) {
    entity.state_price = BigDecimal.fromString(input.priceState.price.toString())
    entity.state_cumulative_price = BigDecimal.fromString(input.priceState.cumulativePrice.toString())
    entity.state_timestamp = input.priceState.timestamp
  }

  entity.save();
}

