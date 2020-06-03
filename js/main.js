// 댓글 관련
const footerComments = document.querySelector(".footer__comments");
const commentInput = document.querySelector("#form-comment input");
const addCommentButton = document.querySelector(".add-btn");

// 검색 관련
const searchInput = document.querySelector(".search-input");
const showingText = document.querySelector(".search-fake span");
const floatingBox = document.querySelector(".floating-box");
const resultDefault = document.querySelector(".result-default");
const results = document.querySelectorAll(".result:not(.result-default)");
const cancelSearching = document.querySelector(
  ".search-input-icon.fa-times-circle"
);

const searching = () => {
  const searchingChr = searchInput.value.trim();

  if (searchingChr.length > 0) {
    showingText.textContent = searchingChr;
    floatingBox.classList.remove("unshown");

    let resultCounts = 0;
    for (let i = 0; i < results.length; i++) {
      const resultId = results[i].querySelector(".result-id").textContent;
      const resultSmall = results[i].querySelector(".result-small").textContent;

      if (
        resultId.includes(searchingChr) ||
        resultSmall.includes(searchingChr)
      ) {
        results[i].classList.remove("unshown");
        resultCounts += 1;
      } else {
        results[i].classList.add("unshown");
      }
    }
    // found nothing
    if (!resultCounts) {
      resultDefault.classList.remove("unshown");
    } else {
      resultDefault.classList.add("unshown");
    }
  }

  clearSearchingChr();
};

const clearSearchingChr = () => {
  const searchingChr = searchInput.value.trim();

  if (searchingChr.length === 0) {
    showingText.textContent = "검색";
    floatingBox.classList.add("unshown");
  }
};

searchInput.addEventListener("keyup", function () {
  searching();
});

searchInput.addEventListener("focusin", function () {
  searching();
});

searchInput.addEventListener("focusout", function () {
  for (let i = 0; i < results.length; i++) {
    results[i].classList.add("unshown");
  }
  resultDefault.classList.add("unshown");
  floatingBox.classList.add("unshown");
});

cancelSearching.addEventListener("mousedown", function () {
  searchInput.value = "";
  clearSearchingChr();
});

// 댓글 달기
const addComment = () => {
  const text = commentInput.value.trim();
  const div = document.createElement("div");

  div.className = "comment-box";
  div.innerHTML = `<a href="#" class="commenter">wecode_bootcamp</a>\n<span class="comment">${text}</span>`;

  footerComments.appendChild(div);
  commentInput.value = "";
  // 삭제 버튼 추가
  const delButton = document.createElement("button");
  delButton.className = "comment-del-btn";
  delButton.type = "button";
  delButton.textContent = "삭제";

  div.appendChild(delButton);

  delButton.addEventListener("click", function () {
    div.remove();
  });
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
