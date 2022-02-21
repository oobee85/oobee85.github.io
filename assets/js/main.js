
let currentCategory = 'all';

function pressed(button) {
  let category = button.id;
  if (button.classList.contains("selected")) {
    deselectCategory(button);
  }
  else {
    selectCategory(button, category);
  }
}

function deselectCategory(button) {
  button.classList.remove("selected");
  currentCategory = 'all';
  showAllPosts();
}

function selectCategory(button, category) {
  if (currentCategory != 'all') {
    document.getElementById(currentCategory).classList.remove("selected");
  }
  hideAllPosts();
  button.classList.add("selected");
  currentCategory = category;
  showAllPostsOfCategory(currentCategory);
}

function hideAllPosts() {
  Array.prototype.forEach.call(document.getElementsByClassName("post"), item => item.classList.add("hiddenpost"));
}

function showAllPosts() {
  Array.prototype.forEach.call(document.getElementsByClassName("post"), item => item.classList.remove("hiddenpost"));
}

function showAllPostsOfCategory(category) {
  Array.prototype.forEach.call(document.getElementsByClassName(category), item => item.classList.remove("hiddenpost"));
}
