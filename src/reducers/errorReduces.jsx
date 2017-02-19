let errorReducer;
export default errorReducer = (state = [], action) => {
	switch(action.type) {
		case "ON_ERROR_TEXEAREA":
			return action.payload
			break;
		default:
			return state;
	}
};

