import { AsyncStorage } from "react-native";

export const Domain = "https://dazzling-yosemite-22846.herokuapp.com";
// export const Domain = "http://localhost:4000"


export const getToken = async () => {
  let Token = await AsyncStorage.getItem("@token");
  return Token;
};

export const DataAccess = {
  GetToken: async (FetchData) => {
    var URL = Domain + FetchData.url;

    if (FetchData.params) { 
      URL = URL + FetchData.params;
    }
    try {
      let response = await fetch(URL, FetchData.Configs);
      return await ReturnResponse(response);
    } catch (error) {
      return error;
    }
  },

  Post: async (URL, params) => {
    console.log(Domain+URL)
    let response = await fetch(Domain + URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(params),
    });
    return await ReturnResponse(response);
  },

  PostSecured: async (Endpoint, params) => {
    var URL = Domain + Endpoint;

    let Token = await getToken();

    if (Token != null) {
      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': Token,
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      return await ReturnResponse(response);
    }
  },

  Delete: async (Endpoint) => {
    var URL = Domain + Endpoint;

    let Token = await getToken();

    if (Token != null) {
      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': Token,
        },
        method: "DELETE",
      });
      return await ReturnResponse(response);
    }
  },

  Put: async (Endpoint) => {
    var URL = Domain + Endpoint;

    let Token = await getToken();

    if (Token != null) {
      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': Token,
        },
        method: "PUT",
      });
      return await ReturnResponse(response);
    }
  },

  Get: async (Endpoint) => {
    var URL = Domain + Endpoint;

    let Token = await getToken();

    if (Token != null) {
      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': Token,
        },
        method: "GET",
      });
      return await ReturnResponse(response);
    }
  },

  GetA: async (FetchData) => {
    var URL = Domain + FetchData.url;
    if (FetchData.params) {
      URL = URL + FetchData.params;
    }
    try {
      let Token = await getToken();

      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: Token,
        },
      });
      return await ReturnResponse(response);
    } catch (error) {
      return error;
    }
  },
};

const ReturnResponse = async (response) => {
  if (response.ok) {
    let responseJson = await response.json();
    responseJson.status = response.status;
    return responseJson;
  } else {
    response = {
      error: "error",
      status: response.status,
      error_description:
        "Unable to process your request Please contact your admin",
    };
    return response;
  }
};
