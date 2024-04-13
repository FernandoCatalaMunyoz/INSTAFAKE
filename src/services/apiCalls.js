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

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (user) => {
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

  try {
    const response = await fetch(`${root}users/profile`, options);
    const data = await response.json();

    if (!data.success) {
      throw new Error("data.message");
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const GetPosts = async (token) => {
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

    if (!data.success) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};

export const GiveLike = async (token, id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}post/like/${id}`, options);

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const GetUsers = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}users`, options);
    const data = await response.json();

    if (!data.succes) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};

export const GetMyPosts = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}post/own`, options);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};

export const DeletePost = async (_id, token) => {
  console.log(_id, "id del post");
  console.log(token, "token del post");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}post/${_id}`, options);
    console.log(response, "response");
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return error;
  }
};
