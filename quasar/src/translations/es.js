import * as nekoES from './neko/es-sp.ts'
export default {
  ...nekoES,
  Language: 'Idioma',
  name: 'español',
  searchPlaceholder: 'Empiecen a buscar en Internet juntos',
  'New navigation': 'Nueva sesión',
  welcomePage:
    {
      login: 'INICIAR SESIÓN',
      moreLogin: {
        username: 'Username or Email',
        password: 'Password',
        forgotPassword: 'Forgot password',
        login: 'login',
        cancel: 'Cancel'
      },
      signup: 'NUEVA CUENTA',
      moreSignup: {
        register: 'Register',
        email: 'Email',
        password: 'Password',
        repeatPassword: 'Reapeat password',
        cencel: 'Cancel',
        successMessage: 'Please check your email to confirm your account',
        ok: 'Ok'
      },
      message: 'Bienvenido a meetnav, la web facilitada y desarrollada por personas',
      searchPlaceholder: 'Empiecen a buscar en Internet juntos',
      endCaption: 'Conéctese con miles de ayudantes en línea y comience a navegar juntos',
      tags:
        {
          a: 'tendencias nuevas',
          b: 'Ayudar a otras',
          c: 'ver videos',
          d: 'ir de compras',
          e: 'planea un viaje'
        },
      searchInternet: 'Buscar en internet',
      searchTogether: 'Buscar juntos en Internet'
    },
  searchPage: {
    tabs: {
      search: 'Buscar',
      navRoom: 'Navroom',
      navList: 'Navlist',
      myPeople: 'Mi gente',
      me: 'Me',
      more: 'Más'
    },
    connect: 'CONECTAR',
    peopleConnect: 'Personas con las que puede conectarse: '
  },
  homePage: {
    mainHeading: 'La nueva forma de navegar internet: JUNTOS!',
    subHeading: 'Navegar conectados es la forma más segura y divertida de descubrir internet.',
    caption: 'Navega. Conecta. Disfruta.',
    navigateTogether: 'Navega y comparte',
    enterCode: '¿Tienes un código de sesión?',
    codeOrLink: '¿Tienes un código de sesión?',
    learnMore: 'Aprende más',
    about: 'sobre',
    carouselHeading: 'Tu navegación es segura',
    carouselHeadingCaption: 'Sólo las personas con las que compartas podrán conectarse.'
  },
  coBrowsePage: {
    invite: 'INVITAR A LA GENTE',
    instructions: 'tienes que ser dos o más para empezar a navegar por Internet juntos'
  },
  connectionRequest: {
    newRequest: 'Nueva solicitud',
    join: 'unirse',
    cancel: 'cancelar',
    waiting: 'está esperando para unirse.'
  },
  'Quick session': 'Nueva sala',
  'Watching together': 'Ver videos juntos',
  'Shopping together': 'De compras juntos',
  'Playing together': 'Jugando juntos',
  selectDateTime: {
    accountReview: 'Revisión de cuenta',
    description: 'Reúnase con su gerente de cuenta para un registro trimestral y aborde cualquier actualización que deba realizarse.',
    select: 'Seleccione una fecha y hora',
    callNow: 'llama ahora',
    bookCall: 'reservar llamada'
  }
}
