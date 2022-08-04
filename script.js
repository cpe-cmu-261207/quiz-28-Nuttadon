async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.results[0].picture.large;
  pname.innerText = resp.data.results[0].name;
  paddress.innerText = resp.data.results[0].country;
  pemail.innerText = resp.data.results[0].email;
}
callApi();
const imgProfile = document.getElementById("img-profile");
const btnRandom = document.querySelector("#btn-random");
const divLoadingCard = document.getElementById("div-loading-card");
const pname = document.getElementById("p-name");
const paddress = document.getElementById("p-address");
const pemail = document.getElementById("p-email");

btnRandom.onClick = async () => {
  btnRandom.innerText = "Loading...";
  btnRandom.disabled = true;
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.results[0].picture.large;
  pname.innerText = resp.data.results[0].name;
  paddress.innerText = resp.data.results[0].country;
  pemail.innerText = resp.data.results[0].email;
};
