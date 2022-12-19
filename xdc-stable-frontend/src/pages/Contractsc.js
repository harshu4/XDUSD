const aestable = { "encodedAci": { "contract": { "event": { "variant": [{ "LoanApplicationCreated": ["int", "address", "int"] }, { "LoanCreated": ["int", "address", "int"] }, { "TokenCreated": ["address"] }, { "LoanWithdrawn": ["int", "address"] }] }, "functions": [{ "arguments": [{ "name": "initial_supply", "type": "int" }, { "name": "oracle_", "type": "OCStableAE.o" }], "name": "init", "payable": false, "returns": "OCStableAE.state", "stateful": true }, { "arguments": [{ "name": "amount", "type": "int" }], "name": "create_loan_application", "payable": true, "returns": "OCStableAE.loan_application_response", "stateful": true }, { "arguments": [{ "name": "loan_id", "type": "int" }], "name": "borrow", "payable": true, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "loan_id", "type": "int" }], "name": "withdraw", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [], "name": "query_fee", "payable": false, "returns": "int", "stateful": false }, { "arguments": [{ "name": "query", "type": "OCStableAE.oq" }], "name": "check_query", "payable": false, "returns": { "option": ["string"] }, "stateful": false }, { "arguments": [], "name": "get_token_address", "payable": false, "returns": "address", "stateful": false }, { "arguments": [{ "name": "borrower", "type": "address" }], "name": "get_loans_by_address", "payable": false, "returns": { "list": ["OCStableAE.loan_data_resposne"] }, "stateful": false }, { "arguments": [{ "name": "loan_id", "type": "int" }], "name": "get_loadn_by_id", "payable": false, "returns": { "option": ["OCStableAE.loan_data"] }, "stateful": false }], "kind": "contract_main", "name": "OCStableAE", "payable": false, "state": { "record": [{ "name": "owner", "type": "address" }, { "name": "loans", "type": "OCStableAE.loans_data_map" }, { "name": "loans_address", "type": "OCStableAE.address_loan_map" }, { "name": "loan_applications", "type": "OCStableAE.loan_applications_map" }, { "name": "next_loan_id", "type": "int" }, { "name": "oracle", "type": "OCStableAE.o" }, { "name": "token", "type": "AEX9" }] }, "type_defs": [{ "name": "loan_application", "typedef": { "record": [{ "name": "amount", "type": "int" }, { "name": "borrower", "type": "address" }, { "name": "ttl", "type": "int" }, { "name": "oquery", "type": "OCStableAE.oq" }] }, "vars": [] }, { "name": "loan_data", "typedef": { "record": [{ "name": "borrower", "type": "address" }, { "name": "ausd_amount", "type": "int" }, { "name": "ae_amount", "type": "int" }, { "name": "withdraw", "type": "bool" }] }, "vars": [] }, { "name": "loan_application_response", "typedef": { "record": [{ "name": "loan_id", "type": "int" }, { "name": "oquery", "type": "OCStableAE.oq" }] }, "vars": [] }, { "name": "loan_data_resposne", "typedef": { "record": [{ "name": "loan_id", "type": "int" }, { "name": "borrower", "type": "address" }, { "name": "ausd_amount", "type": "int" }, { "name": "ae_amount", "type": "int" }, { "name": "withdraw", "type": "bool" }] }, "vars": [] }, { "name": "o", "typedef": { "oracle": ["string", "string"] }, "vars": [] }, { "name": "oq", "typedef": { "oracle_query": ["string", "string"] }, "vars": [] }, { "name": "loans_data_map", "typedef": { "map": ["int", "OCStableAE.loan_data"] }, "vars": [] }, { "name": "address_loan_map", "typedef": { "map": ["address", { "list": ["int"] }] }, "vars": [] }, { "name": "loan_applications_map", "typedef": { "map": ["int", "OCStableAE.loan_application"] }, "vars": [] }] } }, "externalEncodedAci": [{ "namespace": { "name": "ListInternal", "type_defs": [] } }, { "namespace": { "name": "List", "type_defs": [] } }, { "namespace": { "name": "String", "type_defs": [] } }, { "namespace": { "name": "Option", "type_defs": [] } }, { "contract": { "event": { "variant": [{ "Transfer": ["address", "address", "int"] }, { "Allowance": ["address", "address", "int"] }, { "Burn": ["address", "int"] }, { "Mint": ["address", "int"] }, { "Swap": ["address", "int"] }] }, "functions": [{ "arguments": [], "name": "aex9_extensions", "payable": false, "returns": { "list": ["string"] }, "stateful": false }, { "arguments": [{ "name": "name", "type": "string" }, { "name": "decimals", "type": "int" }, { "name": "symbol", "type": "string" }, { "name": "initial_owner_balance", "type": { "option": ["int"] } }], "name": "init", "payable": false, "returns": "AEX9.state", "stateful": false }, { "arguments": [], "name": "meta_info", "payable": false, "returns": "AEX9.meta_info", "stateful": false }, { "arguments": [], "name": "total_supply", "payable": false, "returns": "int", "stateful": false }, { "arguments": [], "name": "owner", "payable": false, "returns": "address", "stateful": false }, { "arguments": [], "name": "balances", "payable": false, "returns": "AEX9.balances", "stateful": false }, { "arguments": [{ "name": "account", "type": "address" }], "name": "balance", "payable": false, "returns": { "option": ["int"] }, "stateful": false }, { "arguments": [], "name": "swapped", "payable": false, "returns": { "map": ["address", "int"] }, "stateful": false }, { "arguments": [], "name": "allowances", "payable": false, "returns": "AEX9.allowances", "stateful": false }, { "arguments": [{ "name": "allowance_accounts", "type": "AEX9.allowance_accounts" }], "name": "allowance", "payable": false, "returns": { "option": ["int"] }, "stateful": false }, { "arguments": [{ "name": "from_account", "type": "address" }], "name": "allowance_for_caller", "payable": false, "returns": { "option": ["int"] }, "stateful": false }, { "arguments": [{ "name": "from_account", "type": "address" }, { "name": "to_account", "type": "address" }, { "name": "value", "type": "int" }], "name": "transfer_allowance", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "for_account", "type": "address" }, { "name": "value", "type": "int" }], "name": "create_allowance", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "for_account", "type": "address" }, { "name": "value_change", "type": "int" }], "name": "change_allowance", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "for_account", "type": "address" }], "name": "reset_allowance", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "to_account", "type": "address" }, { "name": "value", "type": "int" }], "name": "transfer", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "value", "type": "int" }], "name": "burn", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "account", "type": "address" }, { "name": "value", "type": "int" }], "name": "mint", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [], "name": "swap", "payable": false, "returns": { "tuple": [] }, "stateful": true }, { "arguments": [{ "name": "account", "type": "address" }], "name": "check_swap", "payable": false, "returns": "int", "stateful": true }], "kind": "contract_child", "name": "AEX9", "payable": false, "state": { "record": [{ "name": "owner", "type": "address" }, { "name": "total_supply", "type": "int" }, { "name": "balances", "type": "AEX9.balances" }, { "name": "meta_info", "type": "AEX9.meta_info" }, { "name": "allowances", "type": "AEX9.allowances" }, { "name": "swapped", "type": { "map": ["address", "int"] } }] }, "type_defs": [{ "name": "meta_info", "typedef": { "record": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "int" }] }, "vars": [] }, { "name": "allowance_accounts", "typedef": { "record": [{ "name": "from_account", "type": "address" }, { "name": "for_account", "type": "address" }] }, "vars": [] }, { "name": "balances", "typedef": { "map": ["address", "int"] }, "vars": [] }, { "name": "allowances", "typedef": { "map": ["AEX9.allowance_accounts", "int"] }, "vars": [] }] } }], "interface": "\n\n\n\ncontract AEX9 =\n  record state = {owner : address,total_supply : int,balances : AEX9.balances,meta_info : AEX9.meta_info,allowances : AEX9.allowances,swapped : map(address, int)}\n  datatype event = Transfer(address, address, int) | Allowance(address, address, int) | Burn(address, int) | Mint(address, int) | Swap(address, int)\n  record meta_info = {name : string,symbol : string,decimals : int}\n  record allowance_accounts = {from_account : address,for_account : address}\n  type balances = map(address, int)\n  type allowances = map(AEX9.allowance_accounts, int)\n  entrypoint aex9_extensions : () => list(string)\n  entrypoint init : (string, int, string, option(int)) => AEX9.state\n  entrypoint meta_info : () => AEX9.meta_info\n  entrypoint total_supply : () => int\n  entrypoint owner : () => address\n  entrypoint balances : () => AEX9.balances\n  entrypoint balance : (address) => option(int)\n  entrypoint swapped : () => map(address, int)\n  entrypoint allowances : () => AEX9.allowances\n  entrypoint allowance : (AEX9.allowance_accounts) => option(int)\n  entrypoint allowance_for_caller : (address) => option(int)\n  stateful entrypoint transfer_allowance : (address, address, int) => unit\n  stateful entrypoint create_allowance : (address, int) => unit\n  stateful entrypoint change_allowance : (address, int) => unit\n  stateful entrypoint reset_allowance : (address) => unit\n  stateful entrypoint transfer : (address, int) => unit\n  stateful entrypoint burn : (int) => unit\n  stateful entrypoint mint : (address, int) => unit\n  stateful entrypoint swap : () => unit\n  stateful entrypoint check_swap : (address) => int\n\nmain contract OCStableAE =\n  record state = {owner : address,loans : OCStableAE.loans_data_map,loans_address : OCStableAE.address_loan_map,loan_applications : OCStableAE.loan_applications_map,next_loan_id : int,oracle : OCStableAE.o,token : AEX9}\n  datatype event = LoanApplicationCreated(int, address, int) | LoanCreated(int, address, int) | TokenCreated(address) | LoanWithdrawn(int, address)\n  record loan_application = {amount : int,borrower : address,ttl : int,oquery : OCStableAE.oq}\n  record loan_data = {borrower : address,ausd_amount : int,ae_amount : int,withdraw : bool}\n  record loan_application_response = {loan_id : int,oquery : OCStableAE.oq}\n  record loan_data_resposne = {loan_id : int,borrower : address,ausd_amount : int,ae_amount : int,withdraw : bool}\n  type o = oracle(string, string)\n  type oq = oracle_query(string, string)\n  type loans_data_map = map(int, OCStableAE.loan_data)\n  type address_loan_map = map(address, list(int))\n  type loan_applications_map = map(int, OCStableAE.loan_application)\n  stateful entrypoint init : (int, OCStableAE.o) => OCStableAE.state\n  payable stateful entrypoint create_loan_application : (int) => OCStableAE.loan_application_response\n  payable stateful entrypoint borrow : (int) => unit\n  stateful entrypoint withdraw : (int) => unit\n  entrypoint query_fee : () => int\n  entrypoint check_query : (OCStableAE.oq) => option(string)\n  entrypoint get_token_address : () => address\n  entrypoint get_loans_by_address : (address) => list(OCStableAE.loan_data_resposne)\n  entrypoint get_loadn_by_id : (int) => option(OCStableAE.loan_data)\n" }