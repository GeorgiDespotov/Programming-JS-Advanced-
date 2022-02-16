// function solve() {
//     const inputs = document.getElementById('container');
//     const btnOnScreen = inputs.children[3];
//     const btnClear = document.querySelector('#archive button');


//     function createMovie(ev) {
//         ev.preventDefault();

//         const movieName = inputs.children[0];
//         const hall = inputs.children[1];
//         const ticketPrice = inputs.children[2];

//         if (movieName.value == '' || hall.value == '' || !Number(ticketPrice.value) || Number(ticketPrice.value) == 0) {
//             return
//         }
//         const ul = document.querySelector('#movies ul');

//         const li = document.createElement('li');
//         const span = document.createElement('span');
//         span.textContent = movieName.value;

//         const strong = document.createElement('strong');
//         strong.textContent = `Hall: ${hall.value}`;

//         const div = document.createElement('div');
//         const divStrong = document.createElement('strong');
//         divStrong.textContent = ticketPrice.value;

//         const inputDiv = document.createElement('input');
//         inputDiv.setAttribute('placeholder', 'Tickets Sold');

//         const btnArchive = document.createElement('button');
//         btnArchive.textContent = 'Archive';

//         li.appendChild(span);
//         li.appendChild(strong);
//         div.appendChild(divStrong);
//         div.appendChild(inputDiv);
//         div.appendChild(btnArchive);
//         li.appendChild(div);
//         ul.appendChild(li);

//         movieName.value = '';
//         hall.value = '';
//         ticketPrice.value = '';


//         btnArchive.addEventListener('click', (e) => {

//             if (!Number(inputDiv.value)) {

//                 return
//             }
//             if (Number(inputDiv.value) === 0) {return}
//             const currLi = btnArchive.parentNode.parentNode;

//             const total = Number(currLi.children[2].children[0].textContent) * Number(currLi.children[2].children[1].value);

//             const ulArchive = document.querySelector('#archive ul');
//             const liArchive = document.createElement('li');
//             const btnDelete = document.createElement('button');
//             btnDelete.textContent = 'Delete';

//             const spanArch = document.createElement('span');
//             spanArch.textContent = currLi.children[0].textContent;

//             const strongArch = document.createElement('strong');
//             strongArch.textContent = `Total amount: ${total.toFixed(2)}`;

//             liArchive.appendChild(spanArch);
//             liArchive.appendChild(spanArch);
//             liArchive.appendChild(strongArch)
//             liArchive.appendChild(btnDelete);
//             ulArchive.appendChild(liArchive);

//             btnDelete.addEventListener('click', () => {
//                 liArchive.remove();
//             })

//             currLi.remove();
//         })

//     }

//     btnOnScreen.addEventListener('click', createMovie);

//     btnClear.addEventListener('click', () => {
//         const archUl = document.querySelector('#archive ul');
//         console.log(archUl);
//         archUl.innerHTML = '';

//     })
// }

function solve() {
    const foumElements = document.querySelector('#container').children;
    const items = Array.from(foumElements).slice(0, foumElements.length - 1);
    const onScreenBtn = Array.from(foumElements).slice(foumElements.length - 1)[0];
    //console.log(onScreenBtn);
    const movieUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearBtn = document.querySelector('#archive>button');

    function clear(e) {
        
        e.target.parentNode.children[1].innerHTML = '';
    }

    function archive(e) {
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const input = div.children[1];

        
        if (!Number(input.value)) {return};
        
        const span = document.createElement('span');
        const name = li.children[0].textContent;
        span.textContent = name;
        const strong = document.createElement('strong');


        const price = Number(div.children[0].textContent);
        const totalPrice = price * Number(input.value);
        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            
            e.target.parentNode.remove();
        })
        const resultLi = document.createElement('li');
        resultLi.appendChild(span);
        resultLi.appendChild(strong);
        resultLi.appendChild(deleteBtn);
        archiveUl.appendChild(resultLi);
        li.remove();
        
    }

    function createMovie(e) {
        e.preventDefault();

        const name = items[0].value;
        const hall = items[1].value;
        let price = Number(items[2].value);

        if (!name || !hall || !price || isNaN(price)) { return }

        items[0].value = '';
        items[1].value = '';
        items[2].value = '';

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = name;
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(span);
        li.appendChild(strong);

        const div = document.createElement('div');
        const innerStrong = document.createElement('strong');
        
        innerStrong.textContent = `${price.toFixed(2)}`;
        
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';

        archiveBtn.addEventListener('click', archive);

        div.appendChild(innerStrong);
        div.appendChild(input);
        div.appendChild(archiveBtn);

        li.appendChild(div);

        movieUl.appendChild(li);

    }
    onScreenBtn.addEventListener('click', createMovie);
    clearBtn.addEventListener('click', clear);
}