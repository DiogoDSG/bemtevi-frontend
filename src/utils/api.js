export const getCurrentUser = async function (token) {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("");

  const data = await res.json();
  return data;
};

export const loginUser = async function (user) {
  console.log(process.env.REACT_APP_BACKEND_URL);
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.status !== 200) return null;

  const data = await res.json();

  localStorage.setItem("token", JSON.stringify(data.token));

  return data;
};

export const signupUser = async function (user) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

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
    `${process.env.REACT_APP_BACKEND_URL}/users/logout`,
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

export const fetchPosts = async function (token) {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/posts?limit=10&skip=0`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const posts = await res.json();

  let newPost = [];
  posts.forEach((post) => {
    newPost.push({
      id: post._id,
      img: "",
      author: post.author,
      username: post.username,
      content: post.content,
      likes: post.likes,
    });
  });
  return newPost;
};

export const fetchUserPosts = async function (id) {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`);
  const posts = await res.json();

  let newPost = [];
  posts.forEach((post) => {
    newPost.push({
      id: post._id,
      img: "",
      author: post.author,
      username: post.username,
      content: post.content,
    });
  });
  return newPost;
};

export const likePost = async function (postId, token) {
  await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/like/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const dislikePost = async function (postId, token) {
  await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/dislike/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
