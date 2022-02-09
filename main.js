let button = document.querySelector('button')

button.addEventListener('click', (e)=>{
    // console.log('button was clicked')
    e.preventDefault()
    let planetPop = axios.get('https://swapi.dev/api/planets/?search=Alderaan').then(
        (res) => {
            let residents = res.data.results[0].residents
            for(let item of residents){
                axios.get(item).then(
                    (res) => {
                        let person = document.createElement('h2')
                        person.innerHTML = res.data.name
                        person.className = 'personItem'
                        document.body.appendChild(person)
                    }
                )
            }
        }
    )
})