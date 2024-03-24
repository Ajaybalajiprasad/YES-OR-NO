const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const No = document.querySelector('.no');
const Yes = document.querySelector('.yes');
 Yes.addEventListener('click', () => {
    question.innerHTML = "Yes! you are an Idiot :)";
});

No.addEventListener('click', () => {
    question.innerHTML = "No! you are an Idiot :)";
});

No.addEventListener('mouseover', () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const NoRect = No.getBoundingClientRect();
    const i = Math.floor(Math.random() * (wrapperRect.width - NoRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - NoRect.height)) + 1
    No.style.left = i + "px";
    No.style.top = j + "px";
});