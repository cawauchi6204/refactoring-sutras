// before
/*
function func() {
	switch (bird.type) {
		case 'EuropeanSwallow':
			return 'average'
		case 'AfricanSwallow':
			return bird.numberOfCoconuts > 2 ? 'tired' : 'average'
		case 'NorwegianBlueParrot':
			return bird.voltage > 100 ? 'scorched' : 'beautiful'
		default:
			return 'unknown'
	}
}
*/

// after
function plumages(birds) {
	return new Map(
		birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
	)
}
function speeds(birds) {
	return new Map(
		birds
			.map((b) => createBird(b))
			.map((bird) => [bird.name, bird.airSpeedVelocity])
	)
}

function plumage(bird) {
	return new Bird(bird).plumage
}
function airSpeedVelocity(bird) {
	return new Bird(bird).airSpeedVelocity
}

function createBird(bird) {
	switch (bird.type) {
		case 'EuropeanSwallow':
			return new EuropeanSwallow(bird)
		case 'AfricanSwallow':
			return new AfricanSwallow(bird)
		case 'NorwegianBlueParrot':
			return new NorwegianBlueParrot(bird)
		default:
			return new Bird(bird)
	}
}

class Bird {
	public type: string
	public numberOfCoconuts: number
	public voltage: number
	public isNailed: boolean
	constructor(birdObject: {
		type: string
		numberOfCoconuts: number
		voltage: number
		isNailed: boolean
	}) {
		Object.assign(this, birdObject)
	}
	get plumage() {
		return 'unknown'
	}
	get airSpeedVelocity() {
		return null
	}
}

class EuropeanSwallow extends Bird {
	get plumage() {
		return 'average'
	}
	get airSpeedVelocity() {
		return 35
	}
}
class AfricanSwallow extends Bird {
	get plumage() {
		return this.numberOfCoconuts > 2 ? 'tired' : 'average'
	}
	get airSpeedVelocity() {
		return 40 - 2 * this.numberOfCoconuts
	}
}
class NorwegianBlueParrot extends Bird {
	get plumage() {
		return this.voltage > 100 ? 'scorched' : 'beautiful'
	}
	get airSpeedVelocity() {
		return this.isNailed ? 0 : 10 + this.voltage / 10
	}
}
