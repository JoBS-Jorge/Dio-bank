import { loginValidation } from "./login"


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Deve exibir um alert com boas vindas', () => {
        loginValidation()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo ao Dio Bank!')

    })
})