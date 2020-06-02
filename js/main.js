const footerComments = document.querySelector(".footer__comments");
const commentInput = document.querySelector("#form-comment input");
const addCommentButton = document.querySelector(".add-btn");

const addComment = () => {
  const text = commentInput.value.trim();
  const div = document.createElement("div");

  div.className = "comment-box";
  div.innerHTML = `<a href="#" class="commenter">wecode_bootcamp</a>\n<span class="comment">${text}</span>`;

  footerComments.appendChild(div);
  commentInput.value = "";
};

commentInput.addEventListener("keyup", function () {
  const text = commentInput.value.trim();
  const isDisabled = addCommentButton.classList.contains("disabled");

  if (text.length > 0 && isDisabled) {
    addCommentButton.classList.remove("disabled");
    addCommentButton.disabled = false;
  }

  if (text.length === 0 && !isDisabled) {
    addCommentButton.classList.add("disabled");
    addCommentButton.disabled = true;
  }
});

addCommentButton.addEventListener("click", function (e) {
  e.preventDefault();
  addComment();
});
