const professionElement = document.querySelector(".profession");

const profession = ["Programmer", "Developer", "Student"];

function autoType(element, professions) {
  let textIndex = 0;
  let professionIndex = 0;
  let skipUpdate = 0;
  let reverseOrder = false;

  setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }

    if (!reverseOrder) {
      skipUpdate = 2;
      element.innerHTML += professions[professionIndex][textIndex];
      textIndex++;
    } else {
        element.innerHTML = professions[professionIndex].slice(
        0,
        element.innerHTML.length - 1
      );
      textIndex--;
    }

    if (textIndex == professions[professionIndex].length) {
      skipUpdate = 7;
      reverseOrder = true;
    }

    if (textIndex == 0) {
      reverseOrder = false;
      professionIndex =
        professionIndex == professions.length - 1 ? 0 : professionIndex + 1;
    }
  }, 100);
}

autoType(professionElement, profession)

// const professionElement = document.querySelector(".profession");

// const profession = ["Programmer", "Developer", "Student"];

// let textIndex = 0;
// let professionIndex = 0;
// let reverseOrder = false;
// // let pause = false;
// // let pauseControl = 0;
// // let pauseTime = 5;

// let skipUpdate = 0;

// const setIntervalId = setInterval(() => {
// //   if(pause){
// //     pauseControl++;
// //     if(pauseControl == pauseTime){
// //         pause = false;
// //         pauseControl = 0;
// //     }
// //     return;
// //   }

//   if(skipUpdate){
//     skipUpdate--;
//     return;
//   }

//   if (!reverseOrder) {
//     skipUpdate = 2
//     professionElement.innerHTML += profession[professionIndex][textIndex];
//     textIndex++;
//   } else {
//     professionElement.innerHTML = profession[professionIndex].slice(
//       0,
//       professionElement.innerHTML.length - 1
//     );
//     textIndex--;
//   }

//   if (textIndex == profession[professionIndex].length) {
//     skipUpdate = 10;
//     //pause = true;
//     reverseOrder = true;
//   }

//   if (textIndex == 0) {
//     reverseOrder = false;
//     //pause = false;
//     professionIndex = professionIndex == profession.length - 1 ? 0 : professionIndex + 1;
//     //professionIndex++;
//     //if(professionIndex == profession.length) professionIndex = 0;
//   }
// }, 100);
