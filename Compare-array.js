function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let comparacao = a.length === b.length;
    if (!comparacao){
        return [0,0];
    }
    for (let i = 0; i < b.length; i++){
        if (a[i] > b[i]){
            alice++
        }
        if (b[i] > a[i]){
            bob++;
        }
    }
    return [alice, bob];
}
