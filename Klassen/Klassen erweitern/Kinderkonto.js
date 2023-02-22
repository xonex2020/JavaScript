"use strict";

class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung);
        this._limit = limit *-1;
    }

    _saldo_prüfen(auszahlung) {
        if(this._saldo - auszahlung < this._limit) {
            return false;
        } else {
            return true;
        }
    }

    abheben(auszahlung) {
        if(this._saldo_prüfen(auszahlung)) {
            super.abheben(auszahlung);
        } else {
            console.log("Auszahlung nicht möglich -> Kontolimit");
        }
    }

    
}