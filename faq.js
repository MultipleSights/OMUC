  document.querySelectorAll(".faq_question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("show");

      // Close all
      document.querySelectorAll(".faq_answer").forEach((ans) => ans.classList.remove("show"));
      document.querySelectorAll(".faq_question").forEach((q) => q.classList.remove("active"));

      // Toggle current
      if (!isOpen) {
        answer.classList.add("show");
        question.classList.add("active");
      }
    });
  });
