
function upDate(previewPic)
{
    console.log("hi");
    document.getElementById("image").innerHTML=previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('"+previewPic.src+"')";

}
function unDo(){
    x=document.getElementById("image");
    x.style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML="Hover over an image below to display here.";
}