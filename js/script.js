function doMath() {
    var fVar = document.getElementById("fInput").value;
    var mVar = document.getElementById("mInput").value;
    var result = fVar / mVar;
    document.getElementById("result").innerHTML = result;
}