const root = "http://localhost:4000/api/";

export const RegisterUser = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${root}/auth/register`, options);

    const data = await response.json();
    console.log(data, "data");
    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (user) => {
  console.log(user, "usuario");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${root}auth/login`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
    //SI NECESITASE TOKEN
    if (data.message === "Token Error") {
      dispatch(logout({ credentials: "" }));
    }

    return data;
  } catch (error) {
    return error;
  }
};
export const GetProfile = async (token) => {
  console.log(token, "token get profile");
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}users/profile`, options);

    const data = await response.json();

    if (!data.succes) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const UpdateProfile = async (token, data) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  console.log(data, "data");
  try {
    const response = await fetch(`${root}users/profile`, options);
    const data = await response.json();
    console.log(data, "data");
    if (!data.success) {
      throw new Error("data.message");
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getPosts = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}post`, options);
    const data = await response.json();
    console.log(data, "data");

    if (!data.success) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};
