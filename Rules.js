  const refresh=()=>{
    window.scrollTo(0, 0);
    warning();
  //  setCheck(false)
  }
  function rules(n) {
    if ((n != "e" && n != "i") && signs.length<2) {
refresh();  
setContent('Please choose a hero starting from the first point')}
  if(((n === "t" || n === "f") &&
        !signs.includes("s") &&
        !signs.includes("n")) ||
      ((n === "p" || n === "j") && signs.length ==2
    )){
         refresh(); 
     setContent('Please select the hero in order without jumping through the questions')
    }
 
  }
