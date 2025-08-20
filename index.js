//quetions
let PlusIcon = document.querySelectorAll('.PlusIcon');

PlusIcon.forEach(Icon=>{
    Icon.addEventListener('click', ()=>{
        let parent = Icon.closest('.parent'); 

        if(parent){
            let HiddenParagraph = parent.querySelector('.HiddenParagraph');
            
            if(Icon.classList.contains('fa-circle-plus')){
                Icon.classList.remove('fa-circle-plus');
                Icon.classList.add('fa-circle-minus');
                void HiddenParagraph.offsetHeight; //to make transition

                HiddenParagraph.classList.remove('opacity-0','max-h-0')
                HiddenParagraph.classList.add('opacity-100','max-h-[70px]')

            }
            else{
                Icon.classList.add('fa-circle-plus');
                Icon.classList.remove('fa-circle-minus');
                void HiddenParagraph.offsetHeight; //to make transition

                HiddenParagraph.classList.add('opacity-0','max-h-0')
                HiddenParagraph.classList.remove('opacity-100','max-h-[70px]')

            }
        }

    })
})

let counter_contianer = document.querySelectorAll('.counter-contianer');
counter_contianer.forEach(count=>{
    let minus = count.querySelector('.fa-square-minus');
    let SquarePlus = count.querySelector('.fa-square-plus');
    let countText = count.querySelector('.count');

    SquarePlus.addEventListener('click',()=>{
        countText.textContent = parseInt(countText.textContent) + 1;
        minus.style.color = '#F5A31B';
        minus.style.transition = '0.2s';
    })
    minus.addEventListener('click',()=>{
        let current = parseInt(countText.textContent);
        if(current > 0){
            countText.textContent = current - 1;
        }
        if(parseInt(countText.textContent) === 0)
            minus.style.color = '#FCE0B3';
            minus.style.transition = '.2s';
        }
    )})

// document.addEventListener('DOMContentLoaded',()=>{
//     let FormChange = document.getElementById('FormChange');//
//     let FirstBtn = document.getElementById('FirstBtn');//
//     let secondForm = document.getElementById('secondForm');
//     let Back = document.getElementById('Back');//
//     let back2 = document.getElementById('back2');
//     let SecondBtn = document.getElementById('SecondBtn');
//     let thirdForm = document.getElementById('thirdForm');
//     let thirdBtn =document.getElementById('thirdBtn');
//     let final = document.getElementById('final');
//     let finalBtn = document.getElementById('finalBtn');


//     if (thirdForm) { thirdForm.style.zIndex = 9999; thirdForm.style.pointerEvents = 'auto'; thirdForm.style.position = 'relative'; }
//     if (back2) { back2.style.pointerEvents = 'auto'; back2.style.zIndex = 10000; }
//     if (final) { final.style.zIndex = 9999; final.style.pointerEvents = 'auto'; final.style.position = 'relative'; }
//     if (finalBtn) { back2.style.pointerEvents = 'auto'; back2.style.zIndex = 10000; }


//     FirstBtn.addEventListener('click',()=>{
//         FormChange.classList.add('opacity-0','max-h-0');
//         secondForm.classList.remove('opacity-0','max-h-0');
//         thirdForm.classList.add('opacity-0','max-h-0')
//     })
//     Back.addEventListener('click',()=>{
//         FormChange.classList.remove('opacity-0','max-h-0');
//         secondForm.classList.add('opacity-0','max-h-0');
//         thirdForm.classList.add('opacity-0','max-h-0')

//     })
//     SecondBtn.addEventListener('click',()=>{
//         secondForm.classList.add('opacity-0','max-h-0');
//         thirdForm.classList.remove('opacity-0','max-h-0');
//         FormChange.classList.add('opacity-0','max-h-0');
//     })
//     thirdBtn.addEventListener('click',()=>{
//         final.classList.remove('opacity-0','max-h-0');
//         thirdForm.classList.add('opacity-0','max-h-0');    
//     })
//     finalBtn.addEventListener('click',()=>{
//         FormChange.classList.remove('opacity-0','max-h-0');
//         secondForm.classList.add('opacity-0','max-h-0');
//         thirdForm.classList.add('opacity-0','max-h-0');
//         final.classList.add('opacity-0','max-h-0');

//     })
//     back2.addEventListener('click',()=>{
//         thirdForm.classList.add('opacity-0','max-h-0');    
//         secondForm.classList.remove('opacity-0','max-h-0'); 
// })
// })

