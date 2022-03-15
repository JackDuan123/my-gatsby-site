import IArrayTranslater from './ArrayTranslater'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ObjectTranslator = (obj : object, translator : IArrayTranslater, batchArray : string[]) : object => {

	let translateArray : string[] = []

	const writeInArray = (obj : object, list : string[], isWriteIn = false) => {
		let k : keyof typeof obj
		let index = 0;
		// @ts-ignore
		for(k in obj) {
			// console.log(k)
			if(k === 'value' || k === 'excerpt' || k === 'text') {
				const value = obj[k]
				if(!isWriteIn) {
					list.push(value)
				} else {
					// @ts-ignore
					obj[k] = list[index]
					index++
				}

			} else {
				if(typeof obj[k] === 'object') {
					ObjectTranslator(obj[k], translator, batchArray)
				}

			}
		}

	}
	writeInArray(obj, batchArray)

	// console.log(batchArray)

	translateArray = translator.translate(batchArray)

	writeInArray(obj, translateArray, true)

	// writeInArray(obj)
	// console.log(batchArray)
	console.log('before translate')
	console.log(batchArray)

	console.log('translated array')
	console.log(translateArray)
	console.log(obj)

	return obj
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function

export default ObjectTranslator