const factbtn = document.getElementById('fact');
factbtn.addEventListener('click', btnClick);

async function fetchData() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      jsonDataArray = await response.json();
    //   console.log(jsonDataArray);
      displayData();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  function displayData() {
   
    const contentDiv = document.getElementById('contentDiv');
    const factbtn = document.getElementById('fact');


    const imgElement = document.getElementById('image');
    imgElement.src=jsonDataArray.message; 
    factbtn.textContent="Show More"
   
  }
 

   
 function btnClick() {
        fetchData();
    
  }