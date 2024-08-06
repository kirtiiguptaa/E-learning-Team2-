


//tabs

function open_tab(evt, bookName){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active");
    }


    document.getElementById(bookName).style.display = "block";
    evt.currentTarget.classList.add('active');
}