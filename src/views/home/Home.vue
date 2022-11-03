<template>
  <!-- Main -->
  <div>
    <div class="home">
      <div class="image">
        <img class="home-img" src="@/assets/images/Home2.png" alt="" />
        <router-link to="/electrisity" class="lamp-control"></router-link>
        <router-link to="/electrisity" class="socket-control"></router-link>
        <router-link to="/electrisity" class="energy-control"></router-link>

        <router-link to="/alert-controle" class="signal-cop"></router-link>
        <router-link to="/alert-controle" class="red-lamp"></router-link>
        <router-link to="/alert-controle" class="thif"></router-link>
        <router-link to="/alert-controle" class="window-break"></router-link>

        <router-link to="/wi-fi" class="phone"></router-link>

        <router-link to="/climate-controle" class="termometr"></router-link>

        <router-link to="/video-controle" class="camera"></router-link>

        <router-link to="/access-controle" class="door"></router-link>
      </div>

      <div class="fichers">
        <div class="fichers_item">
          <div class="fichers_icone">
            <img
              class="home-fichers_img"
              src="@/assets/icones/circle-check-regular.svg"
              alt=""
            />
            <div class="fichers_text">
              <p>
                Мы используем надежное оборудование ведущих мировых брендов.
              </p>
            </div>
          </div>
          <p class="ficher_name">Надежность</p>
        </div>

        <div class="fichers_item">
          <div class="fichers_icone">
            <img
              class="home-fichers_img"
              src="@/assets/icones/circle-check-regular.svg"
              alt=""
            />
            <div class="fichers_text">
              <p>
                Возможность конфигурации системы под Ваши требования. От
                отдельных узлов до сложных комплексов.
              </p>
            </div>
          </div>
          <div>
            <p class="ficher_name">Гибкость конфигурации</p>
          </div>
        </div>

        <div class="fichers_item">
          <div class="fichers_icone">
            <img
              class="home-fichers_img"
              src="@/assets/icones/circle-check-regular.svg"
              alt=""
            />
            <div class="fichers_text">
              <p>
                Управляйте узлами системы при помощи планшета или смартфона.
              </p>
            </div>
          </div>
          <p class="ficher_name">Удобство</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
</style>