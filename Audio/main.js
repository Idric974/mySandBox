const myRadio = document.querySelector('.myRadio');

const selectRadio = () => {
  myRadio.addEventListener('click', function () {
    const selectElmt = document.querySelector('#myRAdioPlayerId');

    const valeurselectionnee =
      selectElmt.options[selectElmt.selectedIndex].value;
    console.log('valeurselectionnee :', valeurselectionnee);

    var radioLink = document.querySelector('#radioLink');
    radioLink.src = valeurselectionnee;
  });
};

selectRadio();
