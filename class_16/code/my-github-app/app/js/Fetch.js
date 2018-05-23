const baseURL = "https://api.github.com";

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const params = `?client_id=${clientID}&client_secret=${clientSecret}`;

function fetchUserProfile(username) {
  //Fetch data from a specific URL
  // Turn that data into JSON
  //Return a promise

  return fetch(baseURL + "/users/" + username + params).then(d => d.json());
}

function fetchUserRepos(username) {}

module.exports = {
  fetchUserProfile,
  fetchUserRepos
};
