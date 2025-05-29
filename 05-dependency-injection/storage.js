class MemoryStorage {
	constructor() {
		this.data = [];
	}

	save(tasks) {
		this.data = [...tasks];
	}

	load() {
		return [...this.data];
	}

	getName() {
		return 'Memory';
	}
}

class LocalStorageAdapter {
	constructor(key = 'tasks_demo') {
		this.key = key;
	}

	save(tasks) {
		window.localStorage.setItem(this.key, JSON.stringify(tasks));
	}

	load() {
		const stored = window.localStorage.getItem(this.key);
		return stored ? JSON.parse(stored) : [];
	}

	getName() {
		return 'LocalStorage';
	}
}

// Storage factory - handles creating the right storage type
// note the use of the options parameter...why is it there?
export class StorageFactory {
	static createStorage(type, options = {}) {
		switch(type.toLowerCase()) {
			case 'memory':
				return new MemoryStorage();
			case 'localstorage':
				return new LocalStorageAdapter();
			default:
				console.warn(`Unknown storage type: ${type}. Using memory storage.`);
				return new MemoryStorage();
		}
	}
}
