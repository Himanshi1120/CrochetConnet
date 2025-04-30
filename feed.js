document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('feedbackForm')) {
      document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const feedback = document.getElementById('feedback').value;
  
        if (name && rating && feedback) {
          // Store feedback data in localStorage (or sessionStorage)
          const feedbackData = { name, rating, feedback };
          let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
          feedbackList.push(feedbackData);
          localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  
          alert('Thank you for your feedback!');
        }
      });
    }
  
    if (document.getElementById('reviewsList')) {
      let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
  
      if (feedbackList.length > 0) {
        feedbackList.forEach(feedback => {
          const reviewCard = `
            <div class="review-card">
              <h3>${feedback.name}</h3>
              <p class="rating">${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}</p>
              <p>${feedback.feedback}</p>
            </div>
          `;
          document.getElementById('reviewsList').innerHTML += reviewCard;
        });
      } else {
        document.getElementById('reviewsList').innerHTML = '<p>No reviews yet. Be the first to leave a review!</p>';
      }
    }
  });