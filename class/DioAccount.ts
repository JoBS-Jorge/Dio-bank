export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // setName = (name: string): void => {
    //     this.name = name
    //     console.log("nome alterado com sucesso.")
    // }

    getName = (): string => {
        console.log(this.name)
        return this.name
    }

    deposit = (amountDeposit: number): void => {
        if(this.validateStatus()){
            this.balance = this.balance + amountDeposit
            console.log(`Você depositou ${amountDeposit}. Seu Saldo agora é: ${this.balance}`)
        }
        
    }

    withdraw = (amountWithdraw: number): void => {
        if(this.validateStatus()){
            if(this.balance > amountWithdraw){
                this.balance = this.balance - amountWithdraw
                console.log(`Você sacou ${amountWithdraw}. Seu Saldo agora é: ${this.balance}`)
            } else {
                console.log("Saldo Insuficiente. Saque negado!")
            }
        } else {
            console.log("Conta Inativa. Verifique o status no atendimento!")
        }
        
    }
    
    getBalance = (): number => {
        return this.balance
    }

    validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error("Conta Inválida!")
    }
}