//---------- List of requests ------------------------//
// Must be loaded after apitool-rest.js //
var DOC_BASE = "data_api_v2.html";
var URL_BASE = "https://data.ripple.com:443";

var DEFAULT_ADDRESS_1 = "rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn";
var KRW_TRADER_ADDRESS = "rsyDrDi9Emy6vPU78qdxovmNpmj5Qh4NKw";
var DEFAULT_HASH = "9D591B18EDDD34F0B6CF4223A2940AEA2C3CC778925BABF289E0011CD8FA056E";
var DEFAULT_LEDGER = "3170DA37CE2B7F045F889594CBC323D88686D2E90E8FFD2BBCD9BAD12E416DB5";

// general methods -----------------------------------//

Request("GENERAL METHODS");

Request('Get Ledger', {
    method: GET,
    path: "/v2/ledgers/{:ledger_identifier}?{:query_params}",
    description: "Retrieve a ledger by its sequence number or identifying hash.",
    link: "#get-ledger",
    params: {
        "{:ledger_identifier}": DEFAULT_LEDGER,
        "{:query_params}": "transactions=true&binary=false&expand=true"
    }
});

Request('Get Transaction', {
    method: GET,
    path: "/v2/transactions/{:hash}?{:query_params}",
    description: "Retrieve a transactions by its identifying hash.",
    link: "#get-transaction",
    params: {
        "{:hash}": DEFAULT_HASH,
        "{:query_params}": "binary=false"
    }
});

Request('Get Transactions', {
    method: GET,
    path: "/v2/transactions/?{:query_params}",
    description: "Search through all transactions",
    link: "#get-transactions",
    params: {
        "{:query_params}": "descending=true&limit=3&result=tesSUCCESS&type=OfferCreate"
    }
});


Request('Get Exchanges', {
    method: GET,
    path: "/v2/exchanges/{:base}/{:counter}?{:query_params}",
    description: "Retrieve exchanges for a currency pair over time.",
    link: "#get-exchanges",
    params: {
        "{:base}": "USD+rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q",
        "{:counter}": "XRP",
        "{:query_params}": "descending=true&limit=3&result=tesSUCCESS&type=OfferCreate"
    }
});

Request('Get Daily Summary', {
    method: GET,
    path: "/v2/reports/{:date}?{:query_params}",
    description: "Retrieve an aggregated summary of payments per account for one day.",
    link: "#get-daily-summary",
    params: {
        "{:date}": "2015-08-19T00:00:00Z",
        "{:query_params}": "accounts=true&payments=true"
    }
});

Request('Get Stats', {
    method: GET,
    path: "/v2/stats/?{:query_params}",
    description: "Retrieve an aggregated summary of payments per account for one day.",
    link: "#get-daily-summary",
    params: {
        "{:query_params}": "start=2015-08-30&end=2015-08-31&interval=day&family=metric&metrics=accounts_created,exchanges_count,ledger_count,payments_count"
    }
});

// account methods -----------------------------------//

Request("ACCOUNT METHODS");

Request('Get Account', {
    method: GET,
    path: "/v2/accounts/{:address}",
    description: "Get creation info for a specific account.",
    link: "#get-account",
    params: {
        "{:address}": DEFAULT_ADDRESS_1
    }
});

Request('Get Accounts', {
    method: GET,
    path: "/v2/accounts/?{:query_params}",
    description: "Get info for all account creations.",
    link: "#get-accounts",
    params: {
        "{:query_params}": "descending=true&parent=rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn"
    }
});

Request('Get Account Balances', {
    method: GET,
    path: "/v2/accounts/{:address}/balances?{:query_params}",
    description: "Retrieve a given account's balances at a given time.",
    link: "#get-account-balances",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:query_params}": "currency=USD&date=2015-01-01T00:00:00Z&limit=3"
    }
});


Request('Get Account Transaction History', {
    method: GET,
    path: "/v2/accounts/{:address}/transactions?{:query_params}",
    description: "Retrieve transactions that affected the given account.",
    link: "#get-account-transaction-history",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:query_params}": "type=Payment&result=tesSUCCESS&limit=3"
    }
});

Request('Get Transaction By Account and Sequence', {
    method: GET,
    path: "/v2/accounts/{:address}/transactions/{:sequence}?{:query_params}",
    description: "Retrieve a transaction using the sending account and sequence number.",
    link: "#get-transaction-by-account-and-sequence",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:sequence}": 10,
        "{:query_params}": "binary=true"
    }
});

Request('Get Account Payments', {
    method: GET,
    path: "/v2/accounts/{:address}/payments?{:query_params}",
    description: "Retrieve payments to and from a given account.",
    link: "#get-account-payments",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:query_params}": "currency=USD&limit=3"
    }
});

Request('Get Account Exchanges - All', {
    method: GET,
    path: "/v2/accounts/{:address}/exchanges?{:query_params}",
    description: "Retrieve all currency changes in which a given account participated.",
    link: "#get-account-exchanges",
    params: {
        "{:address}": KRW_TRADER_ADDRESS,
        "{:query_params}": "start=2015-08-01T00:00:00Z&end=2015-08-31T00:00:00Z"
    }
});

Request('Get Account Exchanges - Single Currency Pair', {
    method: GET,
    path: "/v2/accounts/{:address}/exchanges/{:base}/{:counter}?{:query_params}",
    description: "Retrieve exchanges of a specific currency pair in which a given account participated.",
    link: "#get-account-exchanges",
    params: {
        "{:address}": KRW_TRADER_ADDRESS,
        "{:base}": "KRW+rUkMKjQitpgAM5WTGk79xpjT38DEJY283d",
        "{:counter}": "XRP",
        "{:query_params}": "start=2015-08-08T00:00:00Z&end=2015-08-31T00:00:00Z&limit=2"
    }
});

Request('Get Account Balance Changes', {
    method: GET,
    path: "/v2/accounts/{:address}/balance_changes?{:query_params}",
    description: "Retrieve detailed account of all changes to an account's balance.",
    link: "#get-account-balance-changes",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:query_params}": "descending=true&limit=3"
    }
});

Request('Get Account Reports By Day', {
    method: GET,
    path: "/v2/accounts/{:address}/reports/{:date}?{:query_params}",
    description: "Retrieve summary of account activity for a given account on a certain day.",
    link: "#get-account-reports",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:date}": "2015-08-27T00:00:00",
        "{:query_params}": "accounts=true&payments=true&descending=true"
    }
});

Request('Get Account Reports Range', {
    method: GET,
    path: "/v2/accounts/{:address}/reports?{:query_params}",
    description: "Retrieve multiple daily summaries of account activity.",
    link: "#get-account-reports",
    params: {
        "{:address}": DEFAULT_ADDRESS_1,
        "{:query_params}": "accounts=true&payments=true&descending=true"
    }
});

//---------- End req. List ---------------------------//
