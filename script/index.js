document.addEventListener('DOMContentLoaded', function() {
    let url = "https://swapi.dev/api/people"
    fetch(url)
    .then(response => {
        console.log(response);
        
        // convert response to js object
        return response.json()
    })
    .then(data => {
        const resultsArr = data.results;

        let containerEl = document.querySelector('.container');
        
        let elementStr = ""
        console.log(resultsArr)
        
        resultsArr.forEach( (element, index) => {
            
            let imgUrl = `https://i.pravatar.cc/150?img=${index + 1}`
            let str = `
           <div class="star-war_img"> <img
                src="${imgUrl}"
                alt="avatar"
              
            />
            <button class="accordion">
                ${index + 1}) ${element.name}
            </button>
            <div class="panel">
                <p>Name: ${element.name}</p>
                <p>Height: ${element.height}</p>
                <p>Gender: ${element.gender}</p>
            </div>
            </div>
            `
            
            elementStr += str;
        });
        
        
        containerEl.innerHTML = elementStr;

        var acc = document.getElementsByClassName("accordion");
        console.log(acc)

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                
                this.classList.toggle("active");

                var panel = this.nextElementSibling;

                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    })
    
    
})

