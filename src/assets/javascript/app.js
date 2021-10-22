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

document.getElementById('icon-moon').addEventListener("click", () => {
    moon = !moon;
    document.querySelectorAll('svg[data-src]').forEach( svg => {  
        svg.setAttribute("class", moon ? 'active' : '');
    });
    document.querySelectorAll('a').forEach( element => {
        if (element.className === 'active'){
            element.className = moon ? 'active active-mode' : 'active';
        }
    });
    document.getElementById('body').className = moon ? 'mode' : '';
    document.getElementById('btn-download').className = moon ? 'mode' : '';
    document.getElementsByClassName('active')[0].className = moon ? 'active active-mode' : 'active';

});

document.getElementById('btn-take').addEventListener("click", () => {
    const email = document.getElementById("email").value;
    alert(`Send mail ${email}, Thank you`);
});

document.addEventListener('DOMContentLoaded', () => { 
    document.querySelectorAll('svg[data-src]').forEach( svg => { 
        fetch(svg.dataset.src)
        .then(respuesta => respuesta.text())
        .then(xml => svg.innerHTML = xml); 
    });
});