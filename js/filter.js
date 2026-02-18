  const buttons = document.querySelectorAll(".filter-btn");
  const posts = document.querySelectorAll(".post-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Button active state
      buttons.forEach(btn => btn.classList.remove("active", "btn-dark"));
      buttons.forEach(btn => btn.classList.add("btn-outline-dark"));
      button.classList.add("active", "btn-dark");
      button.classList.remove("btn-outline-dark");

      const filter = button.getAttribute("data-filter");

      posts.forEach(post => {
        const categories = post.getAttribute("data-categories");

        if (filter === "all" || categories.includes(filter)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });