document.addEventListener("DOMContentLoaded", () => {

const moviePlaceHolder = () => {

fetch("http://localhost:3000/films")
.then(res => res.json())
.then(data => {
    // console.log(data)
    const firstMovie = data[0]
    // console.log(firstMovie)

    const filmImg = document.getElementById("poster")
    const movieTitle = document.getElementById("filmTitle")
    const movieDescr = document.getElementById("movieDescription")
    const runningTime = document.getElementById("runtime")
    const showingTime = document.getElementById("showtime")
    const availTicket =document.getElementById(`ticketsAvailable${data.id}`)

    filmImg.src = firstMovie.poster
    movieTitle.innerText = firstMovie.title
    movieDescr.innerText = firstMovie.description
    runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
    showingTime.innerText =`Showtime: ${firstMovie.showtime}`
    availTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`

    const ticketBuy = document.getElementById(`buyTicket${data.id}`)
    let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)

    ticketBuy.addEventListener('click',()=> {

        tickets--

        if(tickets <= 0){
            const frstMovie = document.getElementById("1")
            frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger">SOLD OUT</span>`

            availTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
        }else{
            availTicket.innerText = `Tickets available: (${tickets})`
        }

        // fetch function to persist Tickets sold in the server
        fetch(`http://localhost:3000/films/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    })

})
}

const movieList = () => {

    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => {
        // console.log(data.length)
        const filmData = data

        for(let i = 0; i < filmData.length; i++){
            let item = filmData[i]
            // console.log(item)
            const movieList = document.createElement("li")
            const list = document.getElementById("showingMovie")

            movieList.classList.add("border")

            movieList.setAttribute('id',`${item.id}`)

            movieList.innerText = item.title
            console.log(item.title)

            list.appendChild(movieList)

            movieList.addEventListener('click',()=>{
                const filmImage = document.getElementById("poster")
                const filmTitle = document.getElementById("filmTitle")
                const filmDescr = document.getElementById("movieDescription")
                const runTime = document.getElementById("runtime")
                const showTime = document.getElementById("showtime")
                const availTickets =document.getElementById("ticketsAvailable")


                filmImage.src = item.poster
                filmTitle.innerText = item.title
                filmDescr.innerText = item.description
                runTime.innerHTML =`Runtime:<span>${item.runtime}</span>`
                showTime.innerText =`Showtime: ${item.showtime}`
                availTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

                const ticketsBuy = document.getElementById("buyTicket")
                let ticket = Number(item.capacity - item.tickets_sold)

                ticketsBuy.addEventListener('click',()=>{

                    
                    ticket --
                    if(ticket <= 0){
                        movieList.innerHTML =`${item.title} <span class="badge bg-danger">SOLD OUT</span>`

                        availTickets.innerHTML = `Tickets available: <span class="badge bg-danger">SOLD OUT</span>`

                    }else{

                        availTickets.innerText = `Tickets available: (${ticket})`
                    }
                    


                })



            })
        }
         
    })
  




}



moviePlaceHolder()
movieList()
})
