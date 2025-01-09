function loadData () {
    let arrayData = ''
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    json.map((val, index)=> {
        console.log(val);
        arrayData += `<div class="card">
          <h1>${val.id}</h1>
          <h2>${val.title}</h2>
          <label>${val.body}</label>
          <h4>$val${val.userId}</h4>  
        </div>`
        
    })

    //document.getElementById('card-content').innerHTML = arrayData
  })
  .catch((err) => console.log(err))
  
}
loadData ();

function clickShortName () {
    const inputValue = document.getElementById('input01').value;

    let answer = ''
    switch (inputValue) {

        case 'intern':
            answer = "Intern Software Engineer"
            break;
            case 'se':
            answer = "Software Engineer"
            break;
            case 'sse':
            answer = "Senior Software Engineer"
            break;
            case 'tl':
            answer = "Tech Lead"
            break;
            default:
                answer = "Error code..!"
            
    }
    document.getElementById('display1').innerText= answer

}
let randomArray = [];
function loadRandomArray () {
  for(var i=0; i<100; i++){
    randomArray.push(Math.round(Math.random() *100));
    
  }
  console.log(randomArray);
  document.getElementById('display2').innerText = randomArray;
  

}
loadRandomArray();

function filterArray () {
  const text = document.getElementById('input2').value;
  let filterText = []
  for(let e=0; e<randomArray.length; e++){
    if(randomArray[e] % text == 0) {
      filterText.push(randomArray[e]);
    }
  }
  document.getElementById('display3').innerText = filterText;

}