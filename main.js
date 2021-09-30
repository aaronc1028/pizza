menu_list_array = ["Veg Margherita Pizza","Pepperoni Pizza", "Chicken Pizza", "Cheese Pizza"
                    ];

function getmenu(){
var htmldata="";

menu_list_array.sort();
for (var i=0 ; i<menu_list_array.length;i++){
    htmldata=htmldata+"<li>" +menu_list_array[i]+ "</li>"
}
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata="";

    menu_list_array.sort();
    for (var i=0 ; i<menu_list_array.length;i++){
        htmldata=htmldata+"<li>" +menu_list_array[i]+ "</li>"
    }
    document.getElementById("display_addedmenu").innerHTML=htmldata;


}

function add_top(){

}
function addMenu(){
    var item=document.getElementById("add_item").value
    if(item!==""){
        menu_list_array.push(item)
        add_item()
        
    }
}