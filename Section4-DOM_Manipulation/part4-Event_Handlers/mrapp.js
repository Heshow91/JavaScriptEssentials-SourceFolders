let select = document.getElementsByName('cars')[0];
//event object gives us details about what triggered the event object
//inline callback
select.onclick = function(event){
    console.log(event);
    console.log("Why are you clicking so hard");
}
//wont see this object
function ClickCallBack(event){
    console.log(event,'clicked by add event listner');
}

select.addEventListener('click', ClickCallBack);

select.removeEventListener('click', ClickCallBack);
// to add inline events you need to target the element itself then choose the symbol name