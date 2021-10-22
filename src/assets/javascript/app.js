let moon = false;


document.getElementById("menu").addEventListener("click", ({target}) => {
    let result = document.getElementsByTagName('a');
    Array.from(result).forEach( element => {
        element.className = "";
    });
    target.className = "active";
});

document.getElementById('btn-download').addEventListener("click", () => {
    alert("Download");
});

document.getElementById('moon').addEventListener("click", () => {
    moon = !moon;
    alert(`Moon ${moon}`);

});

document.getElementById('btn-take').addEventListener("click", () => {
    const email = document.getElementById("email").value;
    alert(`Send mail ${email}, Thank you`);
});