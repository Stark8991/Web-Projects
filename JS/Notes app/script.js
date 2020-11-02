var add_button= document.querySelector(".add-notepad-button");

var note_body=document.querySelector(".note-body");

let todos=JSON.parse(localStorage.getItem("todo"));
if(todos){
todos.forEach((todo)=>{
    add_new_note(todo);
})
}




// Add a notepad

add_button.addEventListener("click",()=>{
    add_new_note();

})
function add_new_note(todo=""){
let note_container=document.createElement("div")
    note_container.classList.add("note-container")
    note_container.innerHTML=`<header>
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </header>
            <textarea name="text-content" id="text" cols="35" rows="11">${todo}</textarea>`

            note_body.appendChild(note_container)

        let save_button= note_container.querySelector(".edit");


var delete_buttons= note_container.querySelector(".delete");




    delete_buttons.addEventListener("click",()=>{
       delete_buttons.parentNode.parentNode.remove();
       save_local_storage();
    })

    save_button.addEventListener("click",()=>{
        var text=save_button.parentNode.parentNode;
        
        var area=text.getElementsByTagName("textarea");
        save_local_storage(area.text.value);
        if(!area[0].disabled){
            area[0].setAttribute("disabled","")
        }
        else{
            area[0].removeAttribute("disabled")
        }


    })
}


// saving text to local storage

function save_local_storage(){
    var texts= document.querySelectorAll("textarea")
    var values=[]
    texts.forEach((text)=>{
        values.push(text.value)
    })

    var storage=localStorage.setItem("todo",JSON.stringify(values));

}



