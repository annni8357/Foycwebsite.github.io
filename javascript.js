new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: () => ({
      links: [
        {
          url: "#",
          icon: "ri-home-smile-2-line",
          title: "Home"
        },
        {
          url: "#",
          icon: "ri-user-line",
          title: "About"
        },
        {
          url: "#",
          icon: "ri-service-line",
          title: "Service"
        },
        {
          url: "#",
          icon: "ri-contacts-line",
          title: "Contact"
        }
      ]
    })
  });
  