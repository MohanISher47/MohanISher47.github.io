  const buttons = document.querySelectorAll(".filter-btn");
  const posts = document.querySelectorAll(".post-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Button active state
      buttons.forEach(btn => {
        btn.classList.remove("active", "btn-dark");
        btn.classList.add("btn-outline-dark");
      });

      button.classList.add("active", "btn-dark");
      button.classList.remove("btn-outline-dark");

      const filter = button.dataset.filter;

      posts.forEach(post => {
        const categories = post.dataset.categories;

        if (filter === "all" || categories.includes(filter)) {
          post.style.display = "";     // ✅ let Bootstrap control layout
        } else {
          post.style.display = "none"; // ✅ hide cleanly
        }
      });
    });
  });
