// const row = document.querySelector('#mainrow')


async function catsFact(){
    try {
        let catInfo = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50")
        let response = await catInfo.json();
        // console.log(response);
        response.forEach((data)=>{
// console.log(data);
let catInfo = {
    ...data,
    text : data.text,
    type : data.type,
    created : data.createdAt,
    updated : data.updatedAt,
    sentcount : data.status.sentCount
}
catInfocard(catInfo);
        })
    } catch (error) {
        console.log(error);
    }
}

catsFact()

function catInfocard({text, type, created, updated,sentCount}) {
    const row = document.querySelector('#mainrow')
    row.innerHTML += 
    `
      <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4" id ="content" style="width: 18rem;">
      <div class ="card-header">
      <h1 class = "text-center" id ="title">${text}</h1>
      </div>
      <div class="card-body">
      <div class="card-text">
      <p><span class = "card-title">Type : </span>${type}</p>
      <p><span class = "card-title">Created On : </span>${created}</p>
      <p><span class = "card-title">Updated On : </span>${updated}</p>
      <p><span class = "card-title">Sentcount : </span>${sentCount}</p>
      </div>
      </div>
      </div>
      </div>
      `
    }
    