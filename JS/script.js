//////////////// Class Active ////////////////////
let allList = document.querySelectorAll(".elements");
allList.forEach((e) => {
  e.addEventListener("click", () => {
    allList.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
  });
});

//////////////// Food Category ////////////////////

let allBtn = document.querySelectorAll('[type="button"]');

let manu_item = document.querySelectorAll(".manu_item");

console.log(allBtn);
console.log(manu_item);

allBtn.forEach((e) => {
  e.addEventListener("click", (el) => {
    let item = el.target.dataset.food;
    allBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.currentTarget.classList.add("active");

    manu_item.forEach((x) => {
      if (item === "all") {
        x.style.display = "block";
      } else {
        if (x.classList.contains(item)) {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    });
  });
});

////////////////Scroll Reveal ////////////////////

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
// Scroll Home
sr.reveal(".slogan_1", { origin: "left" });
sr.reveal(".pr", { origin: "left", delay: 300 });
sr.reveal(".btn", { origin: "left", delay: 500 });

//   Scroll About

sr.reveal(".about_card_1", { origin: "left", delay: 200 });
sr.reveal(".about_card_2", { origin: "reight", delay: 300 });


//Scroll manu
// sr.reveal(".one", { origin: "left" });
// sr.reveal(".two", { origin: "left" ,delay: 200});
// sr.reveal(".three", { origin: "left",delay: 200 });
// sr.reveal(".four", { origin: "left" ,delay: 200});
sr.reveal(".manu_item", { origin: "top" ,delay: 200  });



//   Scroll About

sr.reveal(".about_card_1", { origin: "left", delay: 200 });
sr.reveal(".about_card_2", { origin: "reight", delay: 300 });

//   Scroll About

sr.reveal(".testimonials_card_2", {origin: "top", delay: 300 });
sr.reveal(".testimonials_card_1", { origin: "left", delay: 200 });
// sr.reveal(".testimonials_card_3", { origin: "reight", delay: 100 });