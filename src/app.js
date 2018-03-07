// import 'material-components-web/dist/material-components-web';

[].forEach.call(
  document.querySelectorAll('.mdc-button[data-ripple]'),
  button => window.mdc.ripple.MDCRipple.attachTo(button),
);

document.querySelector('#foo').innerHTML = 'Foo';
