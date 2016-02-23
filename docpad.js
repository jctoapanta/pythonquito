module.exports = {

  prompts: false,

  // Éstas son variables que serán accesibles a través de nuestras plantillas
  templateData: {

    // Información de la conferencia
    conf: {
      name: "PythonQuito",
      description: "La Primera Semana Pythónica de Quito",
      date: "4-5 y 8-9 de Marzo 2016",
      // Si su evento es gratuito, solo comente esta línea
      price: "$0 (DjangoGirls), $10 (Charlas + Camiseta)",
      venue: "",
      address: "Ladrón de Guevara E11-253, Escuela Politécnica Nacional",
      address2: "Edif. de Administración, Hemiciclo Politécnico (Planta Baja)",
      googleMapsAddress: "Ladrón de Guevara E11-253, Quito 170517",
      city: "Quito",
      state: "Pichincha, Ecuador"
    },

    contact: {
      mail: "pythonquito@googlegroups.com"
    },

    // Botón llamada a Acción en la cabecera
    // Si no quiere esto, solo remueva la propiedad callToAction
    callToAction: {
        text: "Regístrate Ahora!",
        link: "/inscripcion"
    },

    propuestasForm: "/propuestas",

    // Información del sitio
    site: {
      theme: "yellow-swan",
      url: "http://pythonquito.tk/",
      googleanalytics: "UA-73316645-1"
    },

    // Secciones activas en el sitio web
    // Para desactivar coméntelo con '//'
    // puede también cambiar el orden aquí y se reflejará en la página
    sections: [
      'about',
      'talks',
      'location',
      'organizers',
      'partners',
      'contact'
    ],

    // Etiquetas que puede traducir a otros lenguajes
    labels: {
      about: "Acerca de",
      talks: "DjangoGirls & Charlas Pythónicas",
      location: "Lugar",
      organizers: "Organizadores",
      partners: "Auspiciantes y Colaboradores",
      contact: "Contacto"
    },

    // Programación completa
    schedule: [
      {
        name: "Registro / Desayuno",
        time: "9h00"
      },
      {
        name: "Galoget Latorre",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Egresado de la Facultad de Sitemas de la EPN, apasionado por la Seguridad Informática y todo lo que tenga que ver con Tecnología",
        company: "Comunidad de Software Libre y Seguridad Informática - HACKEM",
        link: {
          href: "http://twitter.com/Galoget",
          text: "@Galoget"
        },
        presentation: {
          title: "Python como herramienta de Hacking",
          description: "Una introducción sobre el uso de Python como herramienta de Hacking",
          time: "10h00"
        }
      },
      {
        name: "Carlos Toapanta",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Estudiante de nivel superior de la Facultad de Electrónica y Control de la EPN, Hacker Ético",
        company: "Comunidad de Software Libre y Seguridad Informática - HACKEM",
        link: {
          href: "http://github.com/cdtoapanta",
          text: "@cdtoapanta"
        },
        presentation: {
          title: "SageMath",
          description: "Una introducción de SageMath como solución libre a MathLab y otras",
          time: "11h00"
        }
      },
      {
        name: "Almuerzo",
        time: "12h00"
      },
      {
        name: "Roberto Armas",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Estudiante de nivel superior de la UDLA",
        company: "Comunidad de Software Libre y Seguridad Informática - HACKEM",
        link: {
          href: "http://twitter.com/hvillavicencio",
          text: "@hvillavicencio"
        },
        presentation: {
          title: "Aplicaciones web con Python",
          description: "Una introducción al desarrollo de aplicaciones android basadas en Python",
          time: "13h00"
        }
      }
    ],

    // Lista de Auspiciantes y Colaboradores
    organizers: [
      {
        name: "Álvaro Justen",
        logo: "https://avatars1.githubusercontent.com/u/186126?v=3&s=460",
        url: "https://github.com/turicas"
      },
      {
        name: "Galoget Latorre",
        logo: "https://4.bp.blogspot.com/-aCFSh2Evi1M/VsWtCqnXsgI/AAAAAAAAFXs/Z9iOhYFJr0E/s1600/Net%2BNeutrality%2BHackem.jpg",
        url: "http://galogetlatorre.blogspot.com"
      },
      {
        name: "Luiza Nunes",
        logo: "https://avatars3.githubusercontent.com/u/1926257?v=3&s=460",
        url: "https://github.com/luhhsnunes"
      },
      {
        name: "Tania Silva",
        logo: "https://avatars0.githubusercontent.com/u/1254745?v=3&s=460",
        url: "https://github.com/tdruiva"
      },
      {
        name: "Veronica Rodriguez",
        logo: "https://pbs.twimg.com/profile_images/667863177821102080/6wYGuxNX.jpg",
        url: "https://twitter.com/vrokida"
      }
      {
        name: "Juan Carlos Toapanta",
        logo: "https://avatars2.githubusercontent.com/u/16170915?v=3&u=bb6f15bcdb75a60a312239654b309625b5a2a482&s=140",
        url: "https://github.com/jctoapanta"
      }
      {
        name: "Daniel Toapanta",
        logo: "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-9/10464182_10153580445312785_1530515005628569746_n.jpg?oh=5782e8f155e7ac6207e13f54e84af4ad&oe=572EAD1D&__gda__=1465779181_092e884bdb5b29846f260a16e38321c4",
        url: "https://electronicaecuador.blogspot.com"
      }
    ],
    sponsors: [
      {
        name: "ThoughtWorks Ecuador",
        logo: "img/logo-thoughtworks.png",
        url: "https://www.thoughtworks.com/insights/quito"
      }
    ],
    partners: [
      {
        name: "Hackem Research Group",
        logo: "http://4.bp.blogspot.com/-7wsc7MXsZEQ/U8VsPifG5bI/AAAAAAAACvE/MTQbTmPIQzo/s1600/Hackem+Research+Group.png",
        url: "https://www.facebook.com/hackem.epn"
      }
    ],

    // Camino de Directorios de temas
    getTheme: function() {
      return "";
      //return "themes/" + this.site.theme;
    },

    // Camino de Directorios del sitio
    getUrl: function() {
      return this.site.url;
    }
  }
};
