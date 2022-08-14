(() => {
    document 
    .querySelector('.js-speaker-form')
    .addEventListener('subnit', e => {
      e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) => 
        console.log(`${name}: ${value}`),
        );
    });
})();
