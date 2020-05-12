// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your broser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */

let url = "http://localhost:3000/comments";

const getComments = (url = "http://localhost:3000/comments") => {
  return fetch(url).then((response) => response.json());
};

/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data recieved
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */

const postComment = async (newComment) => {
  return fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  })
    .then((response) => response.json())

    .then((data) => data)
    .catch((error) => console.log("Oops something went wrong!"));
};

postComment({ "body": `Comment added` });
/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const patchComment = (comment, newCommentBody) => {

  let newComment = {}
  newComment.id = comment.id
  newComment.body = newCommentBody;
  return fetch(`http://localhost:3000/comments/${comment.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        return "Oops we couldn't update that!";
      }
    })

    .catch((error) => {
      return "Oops we couldn't update that!";
    });
};

//await patchComment({ "id": "39"}, "Comment 1 has been changed");
/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const putComment = async (comment) => {
  return fetch(`http://localhost:3000/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        return "Oops we couldn't update that!";
      }
    })

    .catch((error) => {
      return "Oops we couldn't update that!";
    });
};

putComment({"id":"1", "body":"Comment changed"})

/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */

const deleteComment = async (comment) =>
  await fetch(`http://localhost:3000/comments/${comment.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((respose) => {
      if (response.status === 200) {
        response.json();
      } else {
        return "That could not be deleted!";
      }
    })

    .catch((error) => {
      return "That could not be deleted!";
    });

deleteComment({ id: 12345 });
