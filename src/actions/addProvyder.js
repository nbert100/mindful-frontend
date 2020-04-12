//find the client id for fetching (or just use the api)
//iterate over the the client array to find the proper id because provyder is not built on client in backend

export const addProvyder = (provyder) => {
  console.log(5);
  return (dispatch) => {
    fetch(`http://localhost:8080/api/v1/provyders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(provyder),
    })
      .then((res) => res.json())
      .then((provyder) => {
        dispatch({ type: "ADD_PROVYDER", payload: provyder });
        console.log(6);
      });
    console.log(7);
  };
  console.log(8);
};
