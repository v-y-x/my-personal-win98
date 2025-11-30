let today = new Date();
let day = today.getDate();
let month = today.getMonth();
var cssId = 'myCss';   

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const login = document.getElementById("loginOK")

login.addEventListener('click', async function loadStyle(){
    if ((month == 11 && day >= 1) || (month == 0 && day <= 7)){
        // Source - https://stackoverflow.com/a
        // Posted by user58777, modified by community. See post 'Timeline' for change history
        // Retrieved 2025-11-26, License - CC BY-SA 4.0

        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.href = 'seasonal css/christmas.css';
            link.media = 'all';
            head.appendChild(link); // inserts a link element & loads the css file
            }

        await delay (6400);
        document.querySelector('.christtree').style.visibility = 'visible';
    }
})