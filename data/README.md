# Schemata

There are four CSV files, each representing a subset of columns from a particular table in Addepar's database: edges.csv, nodes.csv, transactions.csv, transaction_effects.csv.

## Table Schema

A core concept at Addepar is the Financial Graph. It is a directed acyclic graph that tracks the ownership between different entities. It is made up of `nodes` and `edges`.
Wealth managers execute financial transactions to (hopefully) increase the wealth of their clients (and charge a hefty fee in return!). These are recorded in `transactions`. Each transaction can have multiple effects. For eg: A purchase of a new car involves a debit from the purchaser's bank account, and a transfer of ownership of the car to the purchaser. These effects are stored in `transaction_effects`, connected to the overall purchase recorded in `transactions`.

### Nodes

| Column          | Type    | Meaning                                                            |
|-----------------|---------|--------------------------------------------------------------------|
| id              | Integer | Unique identifier.                                                 |
| class           | String  | Type of the entity. Eg: `GENERIC_ASSET`, `PERSON_NODE`, `STOCK`.   |
| name            | String  | Name of the entity (anonymized).                                   |
| currency        | String  | Currency the entity is denominated in.                             |
| ownership_type  | String  | ENUM: `VALUE_BASED` (for assets that cannot be sub-divided and usually non-fungible, like art) or `PERCENT_BASED` (for assets like shares or holding accounts). |
| investment_type | String  | Our further classification of the investment. For eg: `GENERIC_ASSET` can be `Private Equity`, `Real Estate`, or many more things.                              |


### Edges

| Column       | Type    | Meaning                                                        |
|--------------|---------|----------------------------------------------------------------|
| id           | Integer | Unique identifier.                                             |
| from_node_id | String  | The source of the edge. Refers to `id` column in `nodes`.      |
| to_node_id   | String  | The destination of the edge. Refers to `id` column in `nodes`. |
 

### Transactions

| Column           | Type    | Meaning                                                        |
|------------------|---------|----------------------------------------------------------------|
| id               | Integer | Unique identifier.                                             |
| transaction_date | Date    | Date the transaction occurred on.                              |
| transaction_type | String  | The type of the transaction. More information in next section. |


### Transaction Effects


| Column            | Type    | Meaning                               |
|-------------------|---------|---------------------------------------|
| id                | Integer | Unique identifier.                    |
| transaction_id    | Integer | Transaction this effect is associated with. Refers to the `id` column in `transactions`. |
| edge_id           | Intger  | The edge on which this effect occurred. In our car purchasse example, we would have had the edges (Person A -> Bank Account, Person A -> Car) and we would associate each effect with the edge relationship it acted upon. |
| transaction_value | Double  | Value of the transaction effect.                                                         |
| currency          | String  | Currency the transaction effect happened in.                                             | 
| is_credit         | Boolean | Whether the effect represents a credit or debit.                                         |


## Transaction Types

Addepar has a lot of different transaction types, each representing one of the myriad financial actions that a wealth manager could undertake. An overview of the transaction types present in the provided dataset can be found below:

| Type                         | Explanation                                                                                                    |
|------------------------------|----------------------------------------------------------------------------------------------------------------|
| commitment                   | Legally binding promise to invest a certain amount of money in a fund.                                         |
| commitment_reduction         | Reduction in money originally committed to.                                                                    |
| contribution                 | Direct payment of money into a fund.                                                                           |
| distribution                 | Money paid out of a fund to its investors as a distribution of profit.                                         |
| distribution.fund_redemption | Money paid out of a fund to its investors as a distribution of profit on the fund's maturity date.             |
| edge_fee                     | Fund management/performance fee.                                                                               |
| edge_fee_reimbursement       | Reimbursement of the above fee.                                                                                |
| income                       | Positive cashflow generated by underlying asset.                                                               |
| interest_expense             | Outflow of money to a cash account as a result of interest earned on an asset.                                 |
| recalled_contribution        | Money returned by a fund to the investor before the money is used for any investing activities.                |
| tax                          | Outflow of money from an account in order to pay taxes on an asset.                                            |
| tax_refund                   | An inflow of money into a cash account as a result of tax money paid on an asset being returned to the client. |
| transfer_in                  | Transfer of cash, value, or shares into an account.                                                            |
| unfunded_adjustment          | Adjustment to the unfunded commitment on a fund.                                                               |
