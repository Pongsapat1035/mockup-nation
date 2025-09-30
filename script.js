      // ========== MODAL FUNCTIONALITY ========== //
      const commentBtn = document.getElementById("commentBtn");
      const commentModal = document.getElementById("commentModal");
      const closeModal = document.getElementById("closeModal");
      const cancelBtn = document.getElementById("cancelBtn");
      const commentForm = document.getElementById("commentForm");

      // Open modal
      commentBtn.addEventListener("click", () => {
        commentModal.classList.add("show");
        document.body.style.overflow = "hidden";
      });

      // Close modal functions
      function closeModalFunction() {
        commentModal.classList.remove("show");
        document.body.style.overflow = "";
      }

      closeModal.addEventListener("click", closeModalFunction);
      cancelBtn.addEventListener("click", closeModalFunction);

      // Close modal when clicking outside
      commentModal.addEventListener("click", (e) => {
        if (e.target === commentModal) {
          closeModalFunction();
        }
      });

      // Handle form submission
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(commentForm);
        const title = formData.get("title");
        const comment = formData.get("comment");
        const satisfaction = formData.get("satisfaction");

        // Display success message (you can replace with actual API call)
        alert(
          `ขอบคุณสำหรับความคิดเห็น!\n\nหัวข้อ: ${title}\nความคิดเห็น: ${comment}\nระดับความพึงพอใจ: ${satisfaction} ดาว`
        );

        // Reset form and close modal
        commentForm.reset();
        closeModalFunction();
      });

      // Close modal with Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && commentModal.classList.contains("show")) {
          closeModalFunction();
        }
      });