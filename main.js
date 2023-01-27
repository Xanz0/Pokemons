const elCards = document.querySelector("#cards");
const elSearchForm = document.querySelector("#searchForm");
const elSearch = document.querySelector("#search");
const elSelect = document.querySelector("#select");
const elOption = document.querySelector("#option");
const formEdit = document.querySelector("#form-edit");
const formChange = document.querySelector("#change");
const formImg = document.querySelector("#form-image");
const templateCard = document.querySelector("#film-template");
let searchPost = [];
let newPosts = [];
let filteredPost = [];
/**********************Render************************/
function renerCard(array,element=elCards){
	elCards.innerHTML="";
	/*array.forEach((film)=>{
		const card = templateCard.content.cloneNode(true);
		console.log(card);
		const name = card.querySelector("")



		element.appendChild(card);
	})*/
	

for (let i = 0; i < array.length; i++) {
    const pokemons = array[i]
    const newCard=document.createElement("div");
    newCard.className="card d-flex col-3 m-4 p-3  "
    newCard.innerHTML=`
                            <div class="card-body border border-3 ">
							  <img src="${pokemons.img}" width="157"
							  height="157" alt="" class="card-img">
							  <hr>
							  <h2 class="card-name">${pokemons.name}</h2>
                              <h6 class="card-type">${pokemons.type}</h6>
											
							 
							  <h5 class="card-weight d-inline-block mb-3">${pokemons.weight} </h5>
							  <h5 class="card-age d-inline-block ms-3 mb-3">${pokemons.avg_spawns} age</h5>

                              
                              <button class="deleteBtn btn btn-danger me-5"
                              data-id="${pokemons.id}" >Delete</button>
							  <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="editBtn btn btn-warning ms-5"
							  <button  class="editBtn btn btn-warning ms-5"
                              data-id="${pokemons.id}" 
							  data-num="${pokemons.num}"
							  >Edit</button>

                            </div>
    `;
    	element.appendChild(newCard);
	}
}
renerCard(pokemons);
/***************** Delete & Edit **************************/


elCards.addEventListener("click", (evt) => {
	let target = evt.target;
	newPosts = [];

	if (target.className.includes("deleteBtn")) {
		let id = Number(target.dataset.id);
		pokemons.forEach((elPost) => {
			if (elPost.id !== id) {
				newPosts.push(elPost);
			}
            
		});
		pokemons=newPosts;
		renerCard(pokemons);
	}

	if (target.className.includes("editBtn")) {
		let id = Number(target.dataset.id);
		let num = target.dataset.num;
			pokemons.forEach((elPost) => {
			if (elPost.id === id) {
				const formName =document.querySelector(".form-name");
				const formType =document.querySelector(".form-type");
				const formWeight =document.querySelector(".form-weight");
				const formAge =document.querySelector(".form-age");
				const formImg = document.querySelector(".form-image");

				formImg.src = elPost.img;
				formImg.alt = elPost.name;

				
				formName.value=elPost.name;
				formType.value=elPost.type;
				formWeight.value=elPost.weight;
				formAge.value=elPost.avg_spawns;
				formImg.value=elPost.img;
				
				formChange.addEventListener("click",(evt)=>{
					const newPost = {
						id:id,
						num:num,
						name:formName.value,
						img:formImg.value,
						type:formType.value,
						weight:formWeight.value,
						avg_spawns:formAge.value,
						
						
					};
					pokemons[id-1] = newPost;
					renerCard(pokemons);

				});
			}
			
            
		});
	}
	

});
/**********************Select******************/
for (let i = 0; i < 151; i++) {
	const option = document.createElement("option");
	elSelect.appendChild(option);

	option.textContent = elSelect.length - 1;
}


elSelect.addEventListener("change", () => {
	const type = elSelect.value;

	filteredPost = [];

	if (type == "All posts") {
		renerCard(pokemons);
	} else {
		pokemons.forEach((post) => {
			if (post.id == type) {
				filteredPost.push(post);
			}
		});

		renerCard(filteredPost);
	}
});
/*************************Search*************************/
elSearchForm.addEventListener("input", (evt) => {
	evt.preventDefault();
	searchPost = [];

	let value = elSearch.value;

	pokemons.forEach((evt) => {
		if (evt.name.toLowerCase().includes(value.toLowerCase())) {
			searchPost.push(evt);
            
		}
        
	});
    
	renerCard(searchPost);
});






















