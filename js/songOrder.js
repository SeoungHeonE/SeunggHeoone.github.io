let textSet = document.getElementById("textSet");
textSet.innerHTML = textSet.innerHTML + "<button id='prevBtn' class='arrow prev'></button><button id='nextBtn' class='arrow next'></button>";
textSet.innerHTML = textSet.innerHTML + "<ul id='productList'><li id='list0' class='active'></li><li id='list1'></li><li id='list2'></li><li id='list3'></li><li id='list4'></li><li id='list5'></li></ul>";

let totalNum = 6;
let moveX = 0;
let imgNum = 0;
let imgWidth = document.getElementById("img0").width;
console.log(imgWidth);

imgMove = function(){
    console.log(imgNum);
    console.log(moveX);
    document.getElementById("imgSet").style.transform = "translateX(" + moveX + "px)";
    for(var i=0; i<totalNum; i++){
        document.getElementById("dt"+i).classList.remove("active");
        document.getElementById("dd"+i).classList.remove("active");
        document.getElementById("btn"+i).classList.remove("active");
        // document.getElementById("audi"+i).classList.remove("active");
        document.getElementById("list"+i).classList.remove("active");
    }
    document.getElementById("dt"+imgNum).classList.add("active");
    document.getElementById("dd"+imgNum).classList.add("active");
    document.getElementById("btn"+imgNum).classList.add("active");
    // document.getElementById("audi"+imgNum).classList.add("active");
    document.getElementById("list"+imgNum).classList.add("active");
}

prevBtn.onclick = function(){
    // console.log("prevBtn");
    if(imgNum == 0){
        imgNum = totalNum-1;
        moveX = -imgWidth * (totalNum-1);
    } else {
        imgNum--;
        moveX = moveX + imgWidth;
    }
    imgMove();
//     document.getElementById("imgSet").style.transform = "translateX(" + moveX + "px)";
}

nextBtn.onclick = function(){
    // console.log("nextBtn");
    if(imgNum == (totalNum-1)){
        imgNum = 0;
        moveX = 0;
    } else {
        imgNum++;
        moveX = moveX - imgWidth;
    }
    imgMove();
//     document.getElementById("imgSet").style.transform = "translateX(" + moveX + "px)";
}

for(var i=0; i<totalNum; i++){
    document.getElementById("list" + i).onclick = function(){
        console.log(this.id);
        console.log(this.id.slice(4,5));

        imgNum = this.id.slice(4,5);
        moveX = imgNum * - imgWidth;
        imgMove();
    };
}