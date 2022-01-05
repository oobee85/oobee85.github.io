
function selectCategory(category) {
    select(category);
}



let selected;
function select(category) {

  // unhighlight highlighted buttons
  let allbuttons = document.getElementsByClassName("selected");
  allbuttons.array.forEach(element => {
    element.className = "category";
  });

  // Highlight the button in the nav bar
  document.getElementById(category).className = "category selected";

  //Show and hide the projects deppending on if they contain the category or not
  let allposts = document.getElementsByClassName("post");

  for (let i = 0; i < allposts.length; i++) {
    let post = allposts[i];
    if (post.classList.contains(category) || category == "all") {
        post.style.display = "";
    }
    else {
        post.style.display = "none";
    }
  }
}