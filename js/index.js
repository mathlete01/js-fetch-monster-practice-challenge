document.addEventListener("DOMContentLoaded", (event) => {

    const URL = "http://localhost:3000/monsters"
    const mContainer = document.getElementById("monster-container")
    const cMonster = document.getElementById("create-monster")

    const configObjGet = {
        method: "GET",
        headers: {
            "Content-Type": "applications/json",
            "Accept": "applications/json"
        }, 
    }

    function fetchMonsters(){
        fetch(URL, configObjGet)
        .then((response)=> response.json())
        //.then((object)=> console.log(object))
        .then((object)=>renderList(object))
    }

    function renderList(monsters){
        //console.dir(monsters)
        // for(monster of monsters){
        //     renderMonster(monster)
        // }
        for(let i = 0; i < 50; i++){
            renderMonster(monsters[i])
        }
    }

    function renderMonster(monster){
        let h2 = document.createElement("h2")
        h2.innerText = monster.name
        //h2.datatype.id = monster.id
        let h4 = document.createElement("h4")
        h4.innerText = `Age: ${monster.age}`
        let desc = document.createElement("p")
        desc.innerText = `Bio: ${monster.description}`

        mContainer.append(h2, h4, desc)
    }

    function createForm(){
        let form = document.createElement("div")
        //form.addEventListener("submit", (e) => createMonster(e))

        let name = document.createElement("input")
        name.placeholder = "name..."
        let age = document.createElement("input")
        age.placeholder = "age..."
        let description = document.createElement("input")
        description.placeholder = "description..."
        let btn = document.createElement("button")
        btn.innerText = "Create"
        btn.addEventListener("click", (e) => createMonster(name, age, description))


        form.append(name, age, description, btn)    
        cMonster.append(form)
    }

    function createMonster(name, age, desc){
        //console.dir(event.target.parentNode.childNode[0]nodeName)
        console.log(`name = ${name.value}`)
        const postData = {
            name: name.value,
            age: age.value,
            description: desc.value
        }
    
        const configObjPost = {
    
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(postData)
        }

        fetch(URL, configObjPost)
        fetchMonsters()
    }

    fetchMonsters()
    createForm()
});