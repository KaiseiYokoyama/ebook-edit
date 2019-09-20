function getID() {
    const value = window.location.href.match(new RegExp("[?&]id=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}
function searchShowData(id){
    for(var i=0; i<data.length; i++){
        if(data[i].id == id) return data[i];
    }
}
function goEditPage(){
    window.location.href = "./edit.html?id="+getID();
}
window.onload = function(){
    // alert(getID());
    showData = searchShowData(getID());
    // alert(showData.tags);
    document.getElementById("title").innerHTML = showData.title;
    document.getElementById("tags").innerHTML = showData.tags;
    document.getElementById("memo").innerHTML = showData.memo;
};