const random_verbs = ['eat', 'drink', 'sleep', 'go','dream'];
const random_words = ['me', 'chicken', 'bed', 'house', 'judge']
const random_prefixes = ['I', 'you', 'we', 'they']

function get_random_elements(arr){
	let random_i = Math.floor(Math.random() * arr.length);
	return arr[random_i];

};

console.log([random_prefixes,random_verbs, random_words].map(get_random_elements).join(' '));




