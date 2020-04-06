
function mouseOver(){
    console.log("its working");
    let save = document.getElementsByClassName("resultBox__newitemBox");
    let i;
    for (i = 0; i < save.length; i++) {
        save[i].mouseOver = function() {
            let div = this.document.getElementsByClassName("resultBox__newitemBox");
            let itemToDelete = div.childNodes[1].value;
            console.log(itemToDelete);
        };
    }
}
export default mouseOver;