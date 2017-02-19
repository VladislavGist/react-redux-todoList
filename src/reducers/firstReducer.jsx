const initialState = [];

let firstReducer;
export default firstReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_LIST":
			return [
				...state,
				action.payload
			];
			break;
		case "REMOVE_LIST":
			return [
				...state.filter(elem => {
					return elem.id !== action.payload;
				})
			];
			break;
		default:
			return state;
	}
};

//проходимся по state и если находим объект с нужным id, то его не возвращаем