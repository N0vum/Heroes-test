const title = `Choose what suits you best 
and 
find out who you are`;
const colorsList = [
  "#800000",
  "#805500",
  "#558000",
  "#008055",
  "#005580",
  "#000080",
  "#800055",
  "#558000",
  "#800015",
  '#CCCC00',
  '#E6004C',
  '#0088CC',
  '#E67300'
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