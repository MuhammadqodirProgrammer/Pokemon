
const cardel =document.querySelector("#card-box")


function myFunc() {
    let cards =""
    for( item of pokemons){
         cards +=`  <div class="card col-lg-3 col-md-4 col-sm-12 col-10 mx-sm-auto  mx-3 text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4 " >
          <img src="${item.img}" class="card-img-top" alt="images">
       <div class="card-body">
       <h4 class="card-title">${item.id}</h4>
        <h5 class="card-title">${item.name}</h5>
        <h5 class="card-title">${item.spawn_time}</h5>
        <p class="card-text"><span> height: ${item.height}</span><br><span> weight: ${item.weight}</span></p>
        <h6 class="card-title"><span>${item.weaknesses}</span></h6>
      </div>
      </div> `
   
      console.log(item.egg);
    }
    
    cardel.innerHTML =cards
}
myFunc()







