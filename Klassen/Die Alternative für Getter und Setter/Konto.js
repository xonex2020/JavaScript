"use strict";


class Konto {

    constructor(iban, inhaber, einzahlung) {
        this._iban = iban; 
        this._inhaber = [inhaber]; 
        this._saldo = einzahlung; 
        this._aktiv = true;
    }


    einzahlen(einzahlung) {
        this._saldo += einzahlung;
    }

    abheben(auszahlung) {
        this._saldo -= auszahlung;
    }

    kontostand_abfragen() {
        return this._saldo;
    }

}
