

export const createPost = async function (post, token) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/posts/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    }
  );

  return await response.json();
};

export const fetchPosts = async function (token) {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/posts/all?limit=10&skip=0`,
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
      owner: post.owner,
      content: post.content,
      likes: post.likes,
    });
  });
  return newPost;
};

export const fetchUserPosts = async function (id, token) {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/posts/${id}`,
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
      owner: post.owner,
      content: post.content,
      likes: post.likes,
    });
  });
  return newPost;
};

export const likePost = async function (postId, token) {
  await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/posts/like/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const dislikePost = async function (postId, token) {
  await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/posts/dislike/${postId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
