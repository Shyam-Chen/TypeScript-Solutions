// page('/', () => {
//   document.querySelector('#root')
//     .textContent = 'viewing home';
// });
//
// page('/about', () => {
//   document.querySelector('#root')
//     .textContent = 'viewing about';
// });
//
// page('/contact', () => {
//   document.querySelector('#root')
//     .textContent = 'viewing contact';
// });
//
// page({ dispatch: false });
// page('/');

const dynamicTabBar = window.dynamicTabBar = new window.mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
const navs = document.querySelector('.navs-js');
const dots = document.querySelector('.dots-js');
const panels = document.querySelector('.panels');

dynamicTabBar.preventDefaultOnClick = true;

const updateDot = index => {
  const activeDot = dots.querySelector('.dot-js.active');
  if (activeDot) activeDot.classList.remove('active');

  const newActiveDot = dots.querySelector(`.dot-js:nth-child(${(index + 1)})`);
  if (newActiveDot) newActiveDot.classList.add('active');
};

const updatePanel = index => {
  const activePanel = panels.querySelector('.panel.active');
  if (activePanel) activePanel.classList.remove('active');

  const newActivePanel = panels.querySelector(`.panel:nth-child(${(index + 1)})`);
  if (newActivePanel) newActivePanel.classList.add('active');
};

dynamicTabBar.listen('MDCTabBar:change', t => {
  let dynamicTabBar = t.detail;
  let nthChildIndex = dynamicTabBar.activeTabIndex;

  updatePanel(nthChildIndex);
  updateDot(nthChildIndex);
});

dots.addEventListener('click', e => {
  if (!e.target.classList.contains('dot-js')) return;

  e.preventDefault();

  let dotIndex = [].slice.call(dots.querySelectorAll('.dot-js')).indexOf(e.target);

  if (dotIndex >= 0) dynamicTabBar.activeTabIndex = dotIndex;

  updatePanel(dotIndex);
  updateDot(dotIndex);
});

navs.addEventListener('click', e => {
  if (!e.target.classList.contains('dot-js')) return;

  e.preventDefault();

  let dotIndex = [].slice.call(dots.querySelectorAll('.dot-js')).indexOf(e.target);

  if (dotIndex >= 0) dynamicTabBar.activeTabIndex = dotIndex;

  updatePanel(dotIndex);
  updateDot(dotIndex);
});

// drawer --
const drawerEl = document.querySelector('.mdc-temporary-drawer');
const MDCTemporaryDrawer = window.mdc.drawer.MDCTemporaryDrawer;
const drawer = new MDCTemporaryDrawer(drawerEl);

document.querySelector('#menu').addEventListener('click', function() {
  drawer.open = true;
});
drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
  console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
  console.log('Received MDCTemporaryDrawer:close');
});
// -- drawer

window.mdc.autoInit();

const config = {
  apiKey: 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
  authDomain: 'web-go-demo.firebaseapp.com',
  databaseURL: 'https://web-go-demo.firebaseio.com',
  projectId: 'web-go-demo',
  storageBucket: 'web-go-demo.appspot.com',
  messagingSenderId: '584431831746'
};

window.firebase.initializeApp(config);




const signInButton = document.querySelector('#sign-in-button');
const signOutButton = document.querySelector('#sign-out-button');

signInButton.style.display = '';
signOutButton.style.display = 'none';

signInButton.onclick = () => {
  const provider = new window.firebase.auth.GoogleAuthProvider();
  window.firebase.auth().signInWithPopup(provider);
};

signOutButton.onclick = () => {
  window.firebase.auth().signOut();
  signInButton.style.display = '';
  signOutButton.style.display = 'none';
};

window.firebase.auth()
  .onAuthStateChanged(user => {
    let currentUID;

    if (user && currentUID === user.uid) return;

    if (user) {
      currentUID = user.uid;

      signInButton.style.display = 'none';
      signOutButton.style.display = '';

      console.log(`${user.displayName}`, `${user.email}`);
    } else {
      currentUID = null;
      signInButton.style.display = '';
    }
  });
