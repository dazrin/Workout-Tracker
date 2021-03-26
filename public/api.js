const API = {
  async getLastWorkout() {

    // Declare res variable to store data fetch response
    let res;

    // Fetch request to get workout data
    try {
      res = await fetch("/api/workout");
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    return json[json.length - 1];
    },

  // Fetch request to get add exercise
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workout/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },


  // Fetch request to create workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  // Fetch request to get last 7 workouts

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workout/range`);
    const json = await res.json();

    return json;
  },
};
