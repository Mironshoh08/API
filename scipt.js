const url = "https://cc-zico.github.io/json/data.json"
const xhr = new XMLHttpRequest()
xhr.open("GET", url)
xhr.responseType = "json"
xhr.send()
xhr.addEventListener("load", function () {
    console.log(xhr.status);
    if (xhr.status) {
        let data = xhr.response
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (i < 8) {
                let div = document.createElement("div")
                card.innerHTML = ` 
                <div> 
                <img  class="image1" src="${data[0].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div)

                let div1 = document.createElement("div")
                card1.innerHTML = ` 
                <div>
              
                <img  class="image1" src="${data[1].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div1)

                let div2 = document.createElement("div")
                card2.innerHTML = ` 
                <div>
              
                <img  class="image1" src="${data[2].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div2)

                let div3 = document.createElement("div")
                card3.innerHTML = ` 
                <div>
               
                <img  class="image1" src="${data[3].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div3)


                let div4 = document.createElement("div")
                card4.innerHTML = ` 
                <div>
               
                <img  class="image1" src="${data[4].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div4)




                let div5 = document.createElement("div")
                card5.innerHTML = ` 
                <div>
               
                <img  class="image1" src="${data[5].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div5)



                let div6 = document.createElement("div")
                card6.innerHTML = ` 
                <div>
               
                <img  class="image1" src="${data[6].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div6)



                let div7 = document.createElement("div")
                card7.innerHTML = ` 
                <div>
               
                <img  class="image1" src="${data[7].url}" alt="">
                <h3 >${data[i].title}</h3>
            </div>`
                document.body.prepend(div7)

            }
        }
    }
})