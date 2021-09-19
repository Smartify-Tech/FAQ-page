//#region /* USING SELECTORS */

// select the question articles (3)
const questions = document.querySelectorAll('.question');
//traverse each and add event listener
questions.forEach((question) =>
{
    // select the button corresponding to each 
    //question article
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', (e) =>
    {
        questions.forEach((item) =>
        {
            if (item !== question)
            {
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text')
    })
})

//#endregion

//#region /*  TRAVERSING THE DOM METHOD */
// // select all the buttons
// const btns = document.querySelectorAll('.question-btn');

// //add click event listener to all buttons
// btns.forEach(function (btn)
// {
//     btn.addEventListener('click', function (e)
//     {
//         const question = e.currentTarget.parentElement.
//             parentElement;
        
//         btns.forEach(function (item)
//         {
//             if (item !== btn)
//                 item.parentElement
//                     .parentElement.classList
//                     .remove('show-text')
//         })
        
//         question.classList.toggle('show-text')
//     })
// })

//#endregion