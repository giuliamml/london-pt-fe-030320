const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */

const getData = async (url) => await fetch(url).then((resp) => resp.json());

const createMember = (member) => {
  let li = document.createElement("li");
  let { name, gender, born, died, culture } = member;

  li.innerHTML = `
        <p class="name">${name}</p>
        <p class="life">${born} – ${died}</p>
        <p class="gender"><strong>Gender: </strong>${gender}</p>
        <p class="culture"><strong>Culture: </strong>${culture}</p>
    `;

  return li;
};

const getAllSwornMembers = async () => {
  const apiURLS = await getData(houseURL);

  return apiURLS.swornMembers;
};

const getMembersData = async () => {
  const swornMembersURLS = await getAllSwornMembers();

  const allMembersPromises = swornMembersURLS.map((url) => getData(url));

  members = await Promise.all(allMembersPromises);
};

const filterRequestedMembers = (members, request) =>
  members.filter((member) => member.name.match(request));

const renderRequestedMembers = (members) => {
  resultEl.innerHTML = "";
  members.forEach((member) => {
    resultEl.append(createMember(member));
  });
};

const displayRequestedMember = async () => {
  await getMembersData();
  renderRequestedMembers(members);

  searchEl.addEventListener("keyup", (event) => {
    const request = event.target.value;
    const filteredMembers = filterRequestedMembers(members, request);

    renderRequestedMembers(filteredMembers);
  });
};

displayRequestedMember();
