// document
//   .querySelector('.browser1')
//   .setAttribute('src', 'https://www.lacentrale.fr/lacote_origine.php');

//****************************************************************************** */

// var myFrame = document.getElementById('myFrame');
// var fc = myFrame.contentWindow || myFrame.contentDocument;
// console.log(
//   'fc:',
//   fc.contentDocument
// );

//****************************************************************************** */

let myIframe = document.getElementById('myIframe');
console.log('myIframe : ', myIframe);

let getData = () => {
  // console.log('test');

  let contentWindow = myIframe.contentWindow;

  // console.log('Iframe content Window : ', contentWindow);

  let test = contentWindow.getElementsByTagName('h1');
  console.log('Test : ', test);
};

// document.getElementsByTagName
