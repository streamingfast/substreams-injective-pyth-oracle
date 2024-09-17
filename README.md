# Injective Pyth Oracle Prices Substreams modules

This module is a simple `injective` substreams using [injective-common](https://substreams.dev/streamingfast/injective-common/v0.2.2) modules to filter specific pyth oracle events.  

## Usage

```bash
substreams build
substreams auth
substreams gui
```

## Modules

### `injective:filtered_events`
Filters `EventSetPythPrices` events.
Default param: `injective:filtered_events: "type:injective.oracle.v1beta1.EventSetPythPrices"`

### `map_set_oracle_prices`
Listens specific events from the `injective:filtered_events` module, specifically targeting `EventSetPythPrices` events related to a specified pair address (default is INJ/USD pair).
Default param: `map_set_oracle_prices: "pairID:0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592`

### `store_set_oracle_prices`
Stores the `EventSetPythPrices` events from the `map_set_oracle_prices`.