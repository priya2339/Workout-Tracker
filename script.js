const API_URL = 'http://localhost:5000/api/workouts';

// Fetch and display all workouts when the page loads
document.addEventListener('DOMContentLoaded', fetchWorkouts);

// Handle form submission to add a workout
document.getElementById('workoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const workoutData = {
        type: document.getElementById('type').value,
        duration: document.getElementById('duration').value,
        intensity: document.getElementById('intensity').value,
        caloriesBurned: document.getElementById('caloriesBurned').value,
    };

    // Send POST request to save workout data
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutData),
    });

    // Fetch the updated list of workouts and update the UI
    fetchWorkouts();

    // Reset the form
    document.getElementById('workoutForm').reset();
});

// Fetch and display all workouts
async function fetchWorkouts() {
    const response = await fetch(API_URL);
    const workouts = await response.json();

    const workoutList = document.getElementById('workoutList');
    let totalCalories = 0;

    // Prepare the HTML content for the workout list
    let html = workouts.map((workout) => {
        totalCalories += workout.caloriesBurned;

        return `
            <div class="workout-item">
                <strong>Type:</strong> ${workout.type} <br>
                <strong>Duration:</strong> ${workout.duration} mins <br>
                <strong>Intensity:</strong> ${workout.intensity} <br>
                <strong>Calories Burned:</strong> ${workout.caloriesBurned} cal <br>
                <button onclick="deleteWorkout('${workout._id}')">Delete</button>
            </div>
            <hr>
        `;
    }).join('');  // Combine all workout items into a single string of HTML

    // Inject the generated HTML into the workout list element
    workoutList.innerHTML = html;

    // Update the total calories burned
    document.getElementById('totalCalories').textContent = totalCalories + ' Calories';
}

// Delete a workout
async function deleteWorkout(id) {
    // Send DELETE request to remove the workout by ID
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    // Fetch the updated list of workouts and update the UI
    fetchWorkouts();
}
