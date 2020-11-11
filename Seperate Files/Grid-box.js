var griditem = document.getElementsByClassName("grid-item");
var gridnum = document.getElementsByClassName("number");

function color()
{
    document.getElementById("color").style.backgroundColor = "red";

}
function test()
{
    for(var i=0;i<gridnum.length;i++)
    {
        var x = Math.round(Math.random() * 19) + 1;
        if(x > 10)
        {
            document.getElementById(i + 1).style.backgroundColor = "red";
        }
        else
        {
            document.getElementById(i + 1).style.backgroundColor = "white";
        }
        gridnum[i].innerHTML = x;
    }
}

window.addEventListener("resize", test);
test();