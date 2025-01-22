import { soma, multiplica } from './soma'

describe('soma', ()=>{
    it('deve retornar a soma de dois números', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('Deve multiplicar um numero por 2', () => {
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })

    it('Deve multiplicar um numero por 3', () => {
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro, com multiplicador diferente de 2 ou 3', () => {
        const value = multiplica(2, 4)
        expect(value).toBe('Multiplicador não aceito')
    })
})
