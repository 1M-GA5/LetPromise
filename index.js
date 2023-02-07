let posts = [];
let user = {
  lastActivityTime: null
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

async function createPostAndUpdateActivityTime(post) {
  await Promise.all([createPost(post), updateLastUserActivityTime()]);
  console.log("Posts: ", posts);
  console.log("Last Activity Time: ", user.lastActivityTime);
  await deleteLastPost();
  console.log("Posts after deletion: ", posts);
  console.log("Last Activity Time after deletion: ", user.lastActivityTime);
}

createPostAndUpdateActivityTime("First post");
