mod pb;

use crate::pb::sf::substreams::cosmos::v1::*;
use crate::pb::sf::cosmos::r#type::v2::Event;
use substreams::store::StoreSetProto;

#[substreams::handlers::store]
pub fn store_oracle_prices(events: EventList, store:StoreSetProto<Event>) {
    events.events.iter().for_each(|event| {
        store.set(0, "oracle_price_event", event);
    });
}


