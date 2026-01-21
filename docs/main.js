document.addEventListener('DOMContentLoaded',()=>{
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    if(mobileMenuButton){
        mobileMenuButton.addEventListener('click',()=>{

            mobileMenu.classList.toggle('hidden')
            const icon = mobileMenuButton.querySelector('i')
            if (icon.classList.contains('fa-bars')){
                icon.classList.remove('fa-bars')
                icon.classList.add('fa-times')
            }
            else{
                icon.classList.remove('fa-times')
                icon.classList.add('fa-bars')
            }
        })
    };

    // close menu 
})