function createTime (time){
  return function(){
  setTimeout(() => {
    console.log("il tempo e scaduto");
    
  }, time);
 };
}
createTime(3000)();
