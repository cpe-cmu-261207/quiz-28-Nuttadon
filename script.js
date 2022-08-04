const imgProfile = document.getElementById("img-profile");
const btnRandom = document.getElementById("btn-random");
const divLoadingCard = document.getElementById("div-loading-card");
const pname = document.getElementById("p-name");
const paddress = document.getElementById("p-address");
const pemail = document.getElementById("p-email");
const icon = document.getElementById("span-gender-icon");
const load = document.getElementById("div-loading-card");
const usercard = document.getElementById("div-user-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.results[0].picture.large;
  pname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  paddress.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  pemail.innerText = resp.data.results[0].email;
  if (resp.data.results[0].gender === "female") icon.innerText = "👩";
  if (resp.data.results[0].gender === "male") icon.innerText = "👨";
  usercard.style.display = "";
  load.style.display = "none";
}
callApi();

btnRandom.onclick = async () => {
  callApi();
  load.style.display = "";
  () => {
    load.style.display = "none";
  },
    1000;
  usercard.style.display = "none";
};
