window.onload = function(){

    var insert = document.getElementById('insert');
    var search = document.getElementById('search');
    var sel = document.getElementById('sel');
    var allLi = document.getElementsByTagName('li');

    insert.addEventListener('click',function(){
        sel.style.display = 'block';
    })

    sel.addEventListener('click',function(ev){
        for(var i = 0; i < allLi.length; i++){
            this.children[i].style.backgroundColor = '';
        }
        console.log(ev.target.nodeName)
        if(ev.target.nodeName==='LI'){
            ev.target.style.backgroundColor = '#fd635e';
            insert.value = ev.target.innerHTML;
        }
        sel.style.display = 'none';
    })

    var f = document.querySelector('form');
    f.addEventListener('mouseleave',function(ev){
        sel.style.display = 'none';
        ev.stopPropagation();
    })





















}