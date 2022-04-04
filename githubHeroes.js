//import indications from

async function getHeroes(indicationsArr) {
  let indicationsStr = indicationsArr.join("").toUpperCase();
  let gitHubResponse = await fetch(
    "https://raw.githubusercontent.com/N0vum/Heroes-test/main/Types"
  );
  let gitHubHeroes = await gitHubResponse.json();
  let role = gitHubHeroes[indicationsStr].role;
  let description = gitHubHeroes[indicationsStr].description;
  let heroesInfo = { role, description };
  return heroesInfo;
}

export default getHeroes;
