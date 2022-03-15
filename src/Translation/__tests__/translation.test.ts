import {MockArrayTranslator} from '../tools/ArrayTranslater'
import ObjectTranslator from '../tools/ObjectTranslator'

//
describe("test nested component",() =>{
    it('test nested component', ()=>{const obj = {
        text   : 'aa',
        value  : 'bb',
        excerpt: 'cc',
        child  : {
            text : 'my boy',
            land : 'sksk',
            child: {
                text: 'cmsk',
                xcas: 'xyz'
            }
        }
    }

    const translater = new MockArrayTranslator()
    const batchArray:string[] =[]

    const newObj = ObjectTranslator(obj,translater,batchArray)
    expect(newObj).toEqual({
        text   : 'merci',
        value  : 'merci',
        excerpt: 'merci',
        child  : {
            text : 'merci',
            land : 'sksk',
            child: {
                text: 'merci',
                xcas: 'xyz'
            }
        }
    })})
})