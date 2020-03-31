export function fetchProvyders() {
  return dispatch => {
    fetch("http://localhost:8080/api/v1/provyders")
      .then(res => res.json())
      .then(provyders =>
        dispatch({
          type: "FETCH_PROVYDERS",
          payload: provyders
        })
      );
  };
}
