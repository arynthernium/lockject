import equal from "equals";

export class Locked {
	#key;
	#store;
	constructor(input, key) {
		if (!input || !key) {
			throw new Error('Must provide an input and a key as arguments.');
		};
		this.#key = key;
		this.#store = input;
	};
	unlock(key) {
		if (equal(key, this.#key)) {
			return this.#store;
		} else {
			return null;
		};
	};
};