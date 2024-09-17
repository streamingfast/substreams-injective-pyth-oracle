mod pb;
mod types;

use core::panic;

use crate::pb::sf::substreams::cosmos::v1::*;
use num_traits::Float;
use pb::sf::substreams::injective::oracle::v1::{SetOraclePrice, PriceState};
use substreams::errors::Error;
use substreams::log;
use substreams::prelude::*;
use substreams::store::{
    StoreSetProto,
};

use types::JSONOraclePrice;

#[substreams::handlers::map]
pub fn map_set_oracle_prices(params: String, events: EventList) -> Result<SetOraclePrice, Error> {
    let mut set_event = SetOraclePrice::default();
    events.events.iter().enumerate().for_each(|(index, event)| {
        let inj_event = event.event.as_ref().unwrap();
        inj_event.attributes.iter().for_each(|attr| {

            if attr.key == "prices" {
                let oracle_prices: Vec<JSONOraclePrice> = serde_json::from_str(&attr.value).unwrap();

                for oracle_price in oracle_prices.iter() {
                    let get_price_id = params.split(":").collect::<Vec<&str>>()[1];

                    if oracle_price.price_id == get_price_id {
                        set_event.price_id = oracle_price.price_id.clone();
                        set_event.ema_price = oracle_price.ema_price.parse::<f64>().unwrap();
                        set_event.ema_conf = oracle_price.ema_conf.parse::<f64>().unwrap();
                        set_event.conf = oracle_price.conf.parse::<f64>().unwrap();
                        set_event.publish_time = oracle_price.publish_time.parse::<i64>().unwrap();
                        set_event.price_state = Some(PriceState {
                            price: oracle_price.price_state.price.parse::<f64>().unwrap(),
                            cumulative_price: oracle_price.price_state.cumulative_price.parse::<f64>().unwrap(),
                            timestamp: oracle_price.price_state.timestamp.parse::<i64>().unwrap(),
                        });
                    }
                }
            }
        });
    });

    Ok(set_event)
}

#[substreams::handlers::store]
pub fn store_set_oracle_prices(event: SetOraclePrice, store: StoreSetProto<SetOraclePrice>) {
    let price_id = event.price_id.clone();
    store.set(0, format!("oracle_price:{price_id}"), &event);
}
