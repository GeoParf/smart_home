<template>
  <div>
    <h2 class="servis-header">Спектр услуг:</h2>
  </div>

  <div class="servises" id="servises">
    <div class="servises-list">
      <ul>
        <li>
          <div class="servises-list-item">
            <div class="servises-list-item_img">
              <img src="@/assets/images/SH-complexAuto.gif" alt="" />
            </div>
            <div class="servises-list-item_text">
              <router-link to="/shs">
                <h3>Умный дом/комплексная автоматизация</h3>
              </router-link>
              <p>
                Проектирование и наладка комплекса системы умный дом для
                квартиры или коттеджа. Централизованное управление всеми узлами
                и системами умного дома.
              </p>
            </div>
          </div>
          <div class="servises-list-item">
            <div class="servises-list-item_img">
              <img src="@/assets/images/Elements.gif" alt="" />
            </div>
            <div class="servises-list-item_text">
              <router-link to="/shs">
                <h3>Отдельные элементы автоматизации умного дома</h3>
              </router-link>
              <p>
                Проектирование и наладка отдельных систем и компонентов умного
                дома, например: управление освещением, управление
                обогревом/котлом, управление электроснабжением, установка
                датчиков безопасности и т.д.
              </p>
            </div>
          </div>
          <div class="servises-list-item">
            <div class="servises-list-item_img">
              <img src="@/assets/images/VideoCam.gif" alt="" />
            </div>
            <div class="servises-list-item_text">
              <router-link to="/video-controle">
                <h3>Видеонаблюдение</h3>
              </router-link>
              <p>
                Создание системы видеонаблюдения под любые задачи пользователя с
                возможностью удаленного просмотра видеоархива.
              </p>
            </div>
          </div>
          <div class="servises-list-item">
            <div class="servises-list-item_img">
              <img src="@/assets/images/Signal.gif" alt="" />
            </div>
            <div class="servises-list-item_text">
              <router-link to="/alert-controle">
                <h3>Сигнализация</h3>
              </router-link>
              <p>
                Система защиты от проникновения с любой конфигурацией датчиков и
                удаленным оповещением.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="servises-image">
      <img src="@/assets/images/Servises.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Servises",
};
</script>