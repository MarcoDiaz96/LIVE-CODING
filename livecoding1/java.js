// PRIMERA PARTE 

/*function bigWords(str, array) {
    return array.filter(word => word.length > str.length);
  }
  
  const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
  const result = bigWords('bocina', myArray);
  console.log(result);*/

  //SEGUNDA PARTE

  /*function printArrayInList(array) {
    const ul = document.createElement('ul');
  
    array.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      ul.appendChild(li);
    });
  
    document.body.appendChild(ul);
  }
  
  const myArray = ['piedra', 'escritorio', 'lampara'];
  printArrayInList(myArray);*/

  
function bigWords(str, array) {
    return array.filter(word => word.length > str.length);
  }
  
  
  function printArrayInList(array) {
    const ul = document.createElement('ul');
  
    array.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      ul.appendChild(li);
    });
  
    document.getElementById('outputList').innerHTML = ''; 
    document.getElementById('outputList').appendChild(ul);
  }
  
  
  function handleButtonClick() {
    const inputWord = document.getElementById('inputWord').value;
    const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
  
    
    const resultArray = bigWords(inputWord, myArray);
  
    
    printArrayInList(resultArray);
  }