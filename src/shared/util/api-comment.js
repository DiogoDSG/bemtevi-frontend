export const getAllPostComments = async function (postId) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/comments/all`,
    {
      body: JSON.stringify({ postId }),
    }
  );

  const data = await response.json();
  console.log(data);
};
