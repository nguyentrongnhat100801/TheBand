var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu')
    var headerHight = header.clientHeight;

    mobileMenu.onclick = function(){
       var isClosed = header.clientHeight ===headerHight;
       if(isClosed){
           header.style.height = 'auto';
       }else {
        header.style.height = null;
       }
    }
    
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i=0 ; i < menuItems.length ; i++){

        var menuItem = menuItems[i];

        menuItem.onclick = function(event){
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParentMenu)
            {
                event.preventDefault();
            }else{
            header.style.height = null;}
        }
    }
    
    var ticketBtns = document.querySelectorAll(".place-body a");
    var modalEvent = document.querySelector('.modal');
    var modalContainer = document.querySelector('.modal-container')
    
    for(var i=0 ; i<ticketBtns.length ; i++) {
        var ticketBtn = ticketBtns[i];
        ticketBtn.onclick = function() {
           modalEvent.classList.add('open');
            }
    }
    var modalClose = document.querySelector('.modal .modal-container .modal-close');
    modalClose.onclick = function() {
        modalEvent.classList.remove('open');
    }
    
    function hideBuyTickets() {
        modalEvent.classList.remove('open');
    }

    modalEvent.addEventListener('click',hideBuyTickets);
    modalContainer.addEventListener('click',function(event){
        event.stopPropagation();
    });

