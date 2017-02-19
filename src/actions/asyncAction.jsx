export let asycnGetTracks = () => {
	return dispatch => {
		setTimeout(() => {
			console.log("get tracks");
			dispatch({type: "ADD_TRACK", payload: "First track"})
		}, 1000);
	}
};