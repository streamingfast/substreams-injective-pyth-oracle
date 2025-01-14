// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class SetOraclePrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SetOraclePrice entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SetOraclePrice must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("SetOraclePrice", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SetOraclePrice | null {
    return changetype<SetOraclePrice | null>(
      store.get_in_block("SetOraclePrice", id),
    );
  }

  static load(id: string): SetOraclePrice | null {
    return changetype<SetOraclePrice | null>(store.get("SetOraclePrice", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get price_id(): string {
    let value = this.get("price_id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set price_id(value: string) {
    this.set("price_id", Value.fromString(value));
  }

  get ema_price(): BigDecimal {
    let value = this.get("ema_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set ema_price(value: BigDecimal) {
    this.set("ema_price", Value.fromBigDecimal(value));
  }

  get ema_conf(): BigDecimal {
    let value = this.get("ema_conf");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set ema_conf(value: BigDecimal) {
    this.set("ema_conf", Value.fromBigDecimal(value));
  }

  get conf(): BigDecimal {
    let value = this.get("conf");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set conf(value: BigDecimal) {
    this.set("conf", Value.fromBigDecimal(value));
  }

  get publish_time(): i64 {
    let value = this.get("publish_time");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toTimestamp();
    }
  }

  set publish_time(value: i64) {
    this.set("publish_time", Value.fromTimestamp(value));
  }

  get state_price(): BigDecimal {
    let value = this.get("state_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set state_price(value: BigDecimal) {
    this.set("state_price", Value.fromBigDecimal(value));
  }

  get state_cumulative_price(): BigDecimal {
    let value = this.get("state_cumulative_price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set state_cumulative_price(value: BigDecimal) {
    this.set("state_cumulative_price", Value.fromBigDecimal(value));
  }

  get state_timestamp(): i64 {
    let value = this.get("state_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toTimestamp();
    }
  }

  set state_timestamp(value: i64) {
    this.set("state_timestamp", Value.fromTimestamp(value));
  }
}
