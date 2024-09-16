
use serde::{Deserialize, Serialize};


#[derive(Serialize, Deserialize)]
pub struct JSONOraclePrice {
    pub price_id: String,
    pub ema_price: String,
    pub ema_conf: String,
    pub conf: String,
    pub publish_time: String,
    pub price_state : JSONPriceState, 
}
#[derive(Serialize, Deserialize)]
pub struct JSONPriceState {
    pub price: String,
    pub cumulative_price: String,
    pub timestamp: String,
}