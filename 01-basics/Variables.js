const accountId = 144553
//accountId = 2 //not allowed to change



var accountPassword = "12345"   //it would change everywhere, not used now, because of issue in block n functional scope

accountCity = "Jaipur"  // value can be assigned without declaring but not a good approach
accountCity = "delhi" 




let accountEmail = "abc123@gmail.com"    // has value under scope only


accountEmail = "abc@gmail.com"
accountPassword = "1223212"
let accountState; // only declared returns un-defined




console.table([accountId, accountEmail,accountPassword, accountCity,accountState])