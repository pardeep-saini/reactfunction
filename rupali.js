// This Function are use for break a long word include string.

let  StringBreak = (warpString, 10) => {
    let array =  warpString.split(' ');
    console.log('array', array);
    
 let newString = '';
 for (let index = 0; index < array.length; index++) {
 
     let element = array[index];
      while (element.length > 10) {
         let bakString =    element.slice(0, 10);
         newString = newString + ' ' + bakString +'-';
         let remainingString =    element.slice(10);
         element = '-'+remainingString;
          
      }
      newString = newString + ' ' + element;
 }
  console.log('newString', newString);
     
 }
 StringBreak('javed khan gfdsgjc dgfgdsfgsudgfyusgfgsufg hello khan bhai kese ho',10)
