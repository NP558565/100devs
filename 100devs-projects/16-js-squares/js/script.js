let box = document.getElementsByClassName("box");
let boxOneClickCount = 0;
let boxTwoClickCount = 0;
let boxThreeClickCount = 0;
let order = 0;

for(let i = 0; i < box.length; i++){
    box[i].addEventListener("click", () =>{
    order++
        if (box[i] === box[0]){
            boxOneClickCount++;
            let currentDegrees = boxOneClickCount * 45;
            box[0].style.transform = `rotate(${currentDegrees}deg)`;
            box[0].style.order = order;
            box[0].style.borderRadius = "100%";
            box[1].style.borderRadius = "0%";
            box[2].style.borderRadius = "0%";
            if (boxOneClickCount % 3 === 0){
                box[1].style.backgroundColor = 'blue';
                box[2].style.backgroundColor = 'red';
            }
        }else if(box[i] === box[1]){
            boxTwoClickCount++;
            let currentDegrees = boxTwoClickCount * 45;
            box[1].style.transform = `rotate(${currentDegrees}deg)`;
            box[1].style.order = order;
            box[1].style.borderRadius = "100%";
            box[0].style.borderRadius = "0%";
            box[2].style.borderRadius = "0%";
            if (boxTwoClickCount % 3 === 0){
                box[0].style.backgroundColor = 'grey';
                box[2].style.backgroundColor = 'yellow';
            }
        }else{
            boxThreeClickCount++;
            let currentDegrees = boxThreeClickCount * 45;
            box[2].style.transform = `rotate(${currentDegrees}deg)`;
            box[2].style.order = order;
            box[2].style.borderRadius = "100%";
            box[0].style.borderRadius = "0%";
            box[1].style.borderRadius = "0%";
            if (boxThreeClickCount % 3 === 0){
                box[0].style.backgroundColor = 'pink';
                box[1].style.backgroundColor = 'orange';
            }
        }
    })
};
