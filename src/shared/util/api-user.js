export const getCurrentUser = async function (token) {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/users/current`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("");

  const data = await res.json();
  return data;
};

export const loginUser = async function (user) {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (res.status !== 200) return null;

  const data = await res.json();

  localStorage.setItem("token", JSON.stringify(data.token));

  return data;
};

export const signupUser = async function (user) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/users/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const data = await response.json();

  localStorage.setItem("token", JSON.stringify(data.token));

  if (response.status === 201) {
    return { data, error: null };
  } else {
    return { user: null, error: data.error };
  }
};

export const logoutUser = async function (token) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/users/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  localStorage.removeItem("token");

  return response.status === 200;
};
