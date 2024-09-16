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

  let priceState = input.priceState
  if (priceState !== null) {
    entity.state_price = BigDecimal.fromString(priceState.price.toString());
    entity.state_cumulative_price = BigDecimal.fromString(priceState.cumulativePrice.toString());
    entity.state_timestamp = priceState.timestamp;
  } else {
    entity.state_price = BigDecimal.fromString("0");
    entity.state_cumulative_price = BigDecimal.fromString("0");
    entity.state_timestamp = 0;
  }

  entity.save();
}

