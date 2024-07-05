import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PartnerAccount } from './class/PartnerAccount'

// const newAccount: PeopleAccount = new PeopleAccount(73087416134, 'Jorge Braz de Souza Filho', 1)
// newAccount.deposit(10)
// newAccount.withdraw(5)
// newAccount.getBalance()
// newAccount.getName()


// const newCompanyAccount: CompanyAccount = new CompanyAccount("Ludo Braz Galvão", 2)
// newCompanyAccount.deposit(20)
// newCompanyAccount.getLoan(200)
// newCompanyAccount.withdraw(50)
// newCompanyAccount.getBalance()
// newCompanyAccount.getName()

const newPartnerAccount: PartnerAccount = new PartnerAccount(2616133, "Ellen Galvão Albuquerque", 3)
newPartnerAccount.deposit(30)
newPartnerAccount.withdraw(5)
newPartnerAccount.getBalance()
newPartnerAccount.getName()