import { v4 } from 'uuid';

const baseURL = "http://localhost:8080/reviews";

const delay = (timeInMillis) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeInMillis);
  });
}
export default {
  saveReview(review) {
    return delay(2000)
      .then(() => {
        return fetch(baseURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(review),
        }).then(response => {
          return response.json();
        });
      });
  },
}