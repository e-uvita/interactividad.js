const TOGGLE_BUTTON = document.getElementById("toggleColor-btn");

TOGGLE_BUTTON.addEventListener("click", function() {
    //alert("click");
    if (document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
});

console.log("Hello, World!");
//alert("Hello, World!");
