
function selectCategory(category) {
    console.log("asdf");
    console.log(category);
    select(category);
}



let selected;
function select(category) {

    // Highlight the button in the nav bar
//   document.getElementById(id).className = "category selected";
//   selected = id;

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