/*
   * Author : see AUTHORS
   * Licence: MIT, see LICENSE
*/

const UserPlugin = {
  install(Vue) {
    Vue.prototype.$logoutUser = function () {
      this.$store.state.user = {
        'userData': {
          'id': null,
          'username': null,
          'mail': null,
          'role': {
            'MANAGE_USERS': false,
            'ADD_NEW_JOB': false,
            'UPLOAD_DICTIONARIES': false,
            'VIEW_ALL_JOBS': false,
            'EDIT_ALL_JOBS': false,
            'OPERATE_ALL_JOBS': false,
            'ADD_USER_PERMISSIONS_TO_JOB': false
          }
        },
        'loggedIn': false
      };
      console.log('logged OUT!!!');
      this.$router.push({
        name: 'login'
      })
    };

    Vue.prototype.$logInUser = function (user) {
      this.$store.state.user.userData = user;
      this.$store.state.user.loggedIn = true;
      console.log('logged IN!!!')
      const redirect = sessionStorage.getItem('loginRedirect')
      sessionStorage.removeItem('loginRedirect')
      if (!redirect || redirect === '/login') {
        this.$router.replace({
          name: 'home'
        })
      } else {
        this.$router.replace(redirect)
      }
    }

    Vue.prototype.$currentUser = function () {
      return this.axios.get(this.$serverAddr + '/user/isLoggedIn').then(response => response.data)
    }


    Vue.prototype.$needLogin = true

    Vue.prototype.$serverAddr = window.serverAddress
    // Vue.prototype.$serverAddr = 'http://147.229.14.131/api';

    Vue.prototype.$user = function () {
      return this.user
    };

    Vue.prototype.$username = this.name;

    Vue.prototype.$userCanManageUsers = function () {
      return this.$store.state.user.userData.role.MANAGE_USERS
    };

    Vue.prototype.$userCanAddJob = function () {
      return this.$store.state.user.userData.role.ADD_NEW_JOB
    }

    Vue.prototype.$error = function (message) {
      this.axios.interceptors.response.handlers["0"].rejected({message: message})
    }

    Vue.prototype.$success = function (message) {
      this.axios.interceptors.response.handlers["0"].fulfilled(
        {data:
            { status: true,
              message: message
            }
        })
    }
  }
};

export default UserPlugin
