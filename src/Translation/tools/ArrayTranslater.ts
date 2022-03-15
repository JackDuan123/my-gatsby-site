interface IArrayTranslater {
	translate(batch : string[]) : string[]
}


export class MockArrayTranslator implements IArrayTranslater {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public translate(batch : string[]) : string[] {

		const result = batch.map((x, index) => 'merci')
		return result
	}

}


export class ArrayTranslator implements IArrayTranslater {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public translate(batch : string[]) : string[] {
		console.log(batch)
		return []
	}

}


export default IArrayTranslater