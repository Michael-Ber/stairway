export const popup = () => {
    try {
        const btns = document.querySelectorAll('[data-popup]');
        const popupOverlay = document.querySelector('.popup-overlay');
        const popups = document.querySelectorAll('.popup');
        const body = document.querySelector('.page__body');

    
        

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => { 
                closeModal(); 
                body.style.marginRight = removeTwitching() + 'px';
                const popupAttr = findParent(e.target).getAttribute('data-popup');
                popupOverlay.classList.add('popup-overlay--visible');
                document.querySelector(`[data-target=${popupAttr}]`).classList.add('popup--visible');
                body.classList.add('page__body--scroll-unable');

            })
        })

        popups.forEach(modal => {
            const close = modal.querySelector('.popup-close');
            if(close) {
                close.addEventListener('click', () => {
                    closeModal()
                    
                })
            }
        })

        window.addEventListener('click', (e) => {
            if(e.target.classList.contains('popup-overlay')) {
                closeModal();
                
            }
        })

        function findParent(element) {
            if(element.getAttribute('data-popup')) {
                return element
            }
            return findParent(element.parentNode)
        }

        function closeModal() {
            popupOverlay.classList.remove('popup-overlay--visible');
            popups.forEach(popup => {
                popup.classList.remove('popup--visible')
            })
            body.classList.remove('page__body--scroll-unable');
            body.style.marginRight = 0;
            
        }

        function removeTwitching() {
            const div = document.createElement('div');
            div.style.width = '30px';
            div.style.height = '30px';
            div.style.overflow = 'scroll';
            div.style.visibility = 'hidden';
            div.style.position = 'absolute';
            div.style.bottom = '-2000px';
            body.appendChild(div);
            const margin = div.offsetWidth - div.clientWidth;
            body.removeChild(div);
            return Number(margin);
        }

    } catch (error) {
        console.log(error)
    }
}