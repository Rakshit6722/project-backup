// const btn=document.querySelector(".colorBtn");

// btn.addEventListener("click", ()=>{
//     let input=document.querySelector(".inputBox").value;

//     if(input===1){
//         const innerBtn=document.querySelector(".row1box1");
//         innerBtn.style.backgroundColor="blue";
//     }
// })

const btn = document.querySelector(".colorBtn"); // Select the button

btn.addEventListener("click", () => {
    let input = document.querySelector(".inputBox").value; // Get input value

    if (parseInt(input) === 1) {
        const targetBox = document.querySelector(".row1box1"); // Select the target box using its unique ID

        if (targetBox) {  // Check if the target box exists
            targetBox.style.backgroundColor = "blue"; // Change background color
        } else {
            console.error("Target box not found: Element with ID 'firstrow' does not exist.");
        }
    }
    else if (parseInt(input) === 2) {
        const targetBox = document.querySelector(".row1box2"); // Select the target box using its unique ID

        if (targetBox) {  // Check if the target box exists
            targetBox.style.backgroundColor = "red"; // Change background color
        } else {
            console.error("Target box not found: Element with ID 'firstrow' does not exist.");
        }
    }
    // targetBox.style.backgroundColor = 'transparent'
});
