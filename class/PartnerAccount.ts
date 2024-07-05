import { DioAccount } from "./DioAccount"

export class PartnerAccount extends DioAccount {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    deposit = (amountDeposit: number): void => {
        if(this.validateStatus()){
            amountDeposit = amountDeposit + 10
            this.getBalance()
        }
    }
}