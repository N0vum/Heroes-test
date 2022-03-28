const title = `Choose what suits you best 
and 
find out who you are`;
const colorsList = [
  "#000000",
  "#003333",
  "#006666",
  "#009999",
  "#00CCCC"
];
const coloredTitle = title.split("").map((с, index) => (
  <font
    color={colorsList[Math.floor(Math.random() * colorsList.length)]}
    key={index}
  >
    {с}
  </font>
));

export default coloredTitle;
