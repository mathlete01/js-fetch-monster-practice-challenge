document.addEventListener("DOMContentLoaded", (event) => {

    const URL = "http://localhost:3000/monsters"
    const mContainer = document.getElementById("monster-container")

    const configObjGet = {
        method: "GET",
        headers: {
            "Content-Type": "applications/json",
            "Accept": "applications/json"
        }, 
    }

    const postData = {
        dbProp1: "data.1",
        dbProp2: "data.2",
        dbProp3: "data.3"
    }

    const configObjPost = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(postData)
    }

    

    function fetchMonsters(){
        fetch(URL, configObjGet)
        .then((response)=> response.json())
        //.then((object)=> console.log(object))
        .then((object)=>renderList(object))
    }

    function renderList(monsters){
        //console.dir(monsters)
        for(monster of monsters){
            renderMonster(monster)
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

    fetchMonsters()
});