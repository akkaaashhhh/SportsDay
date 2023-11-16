import firebaseConfig from "./firebaseConfig.js";

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Function to fetch and display scores
  const displayScores = async () => {
      try {
          const docRef = db.collection("Scores").doc("HouseWiseScores");
          const doc = await docRef.get();

          if (doc.exists) {
              const data = doc.data();
              console.log(data);

              const scores = [
                  { name: 'Blue', score: data.Blue },
                  { name: 'Red', score: data.Red },
                  { name: 'Green', score: data.Green },
                  { name: 'Yellow', score: data.Yellow },
              ];

              // Sort scores in descending order
              scores.sort((a, b) => b.score - a.score);

              // Rearrange boxes based on sorted scores
              scores.forEach(({ name, score }, index) => {
                  document.getElementById(`${name.toLowerCase()}Score`).innerText = `${name}: ${score}`;
                  const box = document.querySelector(`.box.${name.toLowerCase()}`);
                  document.querySelector('.container').insertBefore(box, document.querySelectorAll('.box')[index]);
              });
          } else {
              console.log("No such document!");
          }
      } catch (error) {
          console.error("Error getting document:", error);
      }
  };

  // Call the function to display scores when the page loads
  window.onload = displayScores;

  // Firebase initialization and other code...

// Selecting each box element
const blueBox = document.querySelector('.box.blue');
const redBox = document.querySelector('.box.red');
const greenBox = document.querySelector('.box.green');
const yellowBox = document.querySelector('.box.yellow');

// Event listener for clicking the blue box
blueBox.addEventListener('click', () => {
  window.location.href = 'BluePoints.html'; // Redirect to blue.html when blue box is clicked
});

// Event listener for clicking the red box
redBox.addEventListener('click', () => {
  // Add redirection logic for red.html if needed
  window.location.href = 'RedPoints.html'
});

// Event listener for clicking the green box
greenBox.addEventListener('click', () => {
  // Add redirection logic for green.html if needed
  window.location.href = 'GreenPoints.html'
});

// Event listener for clicking the yellow box
yellowBox.addEventListener('click', () => {
  // Add redirection logic for yellow.html if needed
  window.location.href = 'YellowPoints.html'
});

// Function to fetch and display scores...
