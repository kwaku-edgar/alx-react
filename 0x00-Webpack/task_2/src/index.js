import './css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.createElement('div');
    logo.id = 'logo';
    document.body.prepend(logo);

    const button = document.createElement('button');
    button.textContent = 'Click me ';

    const counter = document.createElement('span');
    counter.className = 'counter';
    counter.textContent = '0';

    button.appendChild(counter);
    document.body.appendChild(button);

    let count = 0;
    button.addEventListener('click', () => {
        count += 1;
        counter.textContent = count;
    });
});

