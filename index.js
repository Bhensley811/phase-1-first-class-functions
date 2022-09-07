function receivesAFunction(spy){
    let chai = 2
    spy(chai)
}
 function returnsANamedFunction(){
    return function heavy(){}
 }

 function returnsAnAnonymousFunction(){
    return function(){}
 }