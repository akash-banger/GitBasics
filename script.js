const learning = document.querySelector('.learning');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    learning.classList.add('animate-signIn');
    learning.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    learning.classList.add('animate-signUp');
    learning.classList.remove('animate-signIn');
});