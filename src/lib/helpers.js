export function analizeazaTranzactii(tranzactii) {
    let totalCantitate = 0
    let totalValoare = 0
    let tranzactiiCount = 0
    if (!tranzactii)
        return {
            numarTranzactii: 0,
            totalCantitate: 0,
            totalValoare: 0,
            mediePret: 0,
        }
    for (const t of tranzactii) {
        const valoare = t.pret * t.cantitate

        totalCantitate += t.cantitate
        totalValoare += valoare
        tranzactiiCount += 1
    }
    console.log(
        'totalCantitate',
        totalCantitate,
        'totalValoare',
        totalValoare,
        'tranzactiiCount',
        tranzactiiCount
    )

    return {
        numarTranzactii: tranzactiiCount,
        totalCantitate,
        totalValoare,
        mediePret: tranzactiiCount > 0 ? totalValoare / totalCantitate : 0,
    }
}
