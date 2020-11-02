const form=document.getElementById("input")
var list=document.getElementById("orderd-list")
const input=document.querySelector(".input-field")



// get items from local storage

function get_Item_from_localstorage(){
    
    let get_items=JSON.parse(localStorage.getItem("todo"));
    let get_completed_items=JSON.parse(localStorage.getItem("done"));
    // console.log(get_items)
    if(get_items!==null){
        // console.log(get_items)
        get_items.forEach(element => {
            // console.log(element)
            add(element,"notCompleted")
        });
    }
    if(get_completed_items!==null){
        get_completed_items.forEach((element)=>{
            add(element,"completed")
        })
    }
    
}
get_Item_from_localstorage();

form.addEventListener("submit",(e)=>{
// preventing to open a new dialouge
e.preventDefault();
if(input.value){
    add();
}
else{
    return;
}

})


function add(item="",status){
    // creating a li and appending it to the list
let li=document.createElement("li")
li.classList.add("list-item")
list.appendChild(li)

if(item!=="" && status==="notCompleted"){
    li.innerText=item;
    li.classList.add("not-completed")
    console.log(status)
    console.log(item)
}
else if(item!=="" && status==="completed"){
    li.innerText=item;
    li.classList.add("completed")
    // console.log(item)
    // console.log(status)
}
else{
li.classList.add("not-completed")
li.innerText=input.value;
updateLs();
}


// selecting the items

li.addEventListener("click",()=>{
    li.classList.toggle("not-completed")
    li.classList.toggle("completed")
    updateLs();

})

li.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    li.remove();
    updateLs();
    
})

input.value=""
}

function updateLs(){
    let item_lists=document.querySelectorAll(".list-item");
    var array=[];
    let array_completed=[];

     item_lists.forEach((item_list)=>{
         let contain=item_list.classList.contains("completed")

         if(!contain){
             array.push(item_list.innerText)
        }
        else{
            array_completed.push(item_list.innerText)
        }
        
    })
    localStorage.setItem("todo",JSON.stringify(array))
    localStorage.setItem("done",JSON.stringify(array_completed))
}
