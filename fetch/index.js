const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
  

}

const saveData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}


async function allDataAndDelete() {

  try {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data[0].id);


    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/'+data[0].id, {
      method: 'DELETE',
    });
    const data2 = await res2.json()
    console.log(data2)
  }catch (err) {
    console.log(err)
  }
  }
  
allDataAndDelete()