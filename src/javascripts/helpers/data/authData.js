import firebase from 'firebase/app';
import 'firebase/auth';

const loginButton = $('#login-button');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person logged in
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      // person not logged in
      logoutButton.addClass('hide');
      loginButton.removeClass('hide');
    }
  });
};

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { checkLoginStatus, logoutEvent };
