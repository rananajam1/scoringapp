import { AsyncStorage } from "react-native";

export const Domain = "https://dazzling-yosemite-22846.herokuapp.com";


export const getToken = async () => {
  let Token = await AsyncStorage.getItem("@UserAuth");
  Token = await JSON.parse(Token);
  return `bearer ${Token.token}`;
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

  PostSecured: async (FetchData, params) => {
    var URL = Domain + FetchData.url;

    let Token = await getToken();

    if (Token != null) {
      let response = await fetch(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: Token,
        },
        method: "POST",
        body: JSON.stringify(params),
      });
      debugger;
      return await ReturnResponse(response);
    }
  },
  Get: async (FetchData) => {
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
