export default (function () {
	let state;

	function initializeState () {
		if (!state) state = {};
	}

	function addData (prop, value) {
		return addFunctionToState(prop, value);
	}

	function addFunctionToState (prop, value) {
		initializeState();
		state[prop] = value;
	}

	function getFunction (prop) {
		initializeState();
		if (!state.hasOwnProperty(prop)) console.error(`The property ${prop} does not exist in the State singleton`);
		else return state[prop];
	}

	function getData (prop) {
		return getFunction(prop);
	}

	return { addFunctionToState, getFunction, addData, getData };
})();
