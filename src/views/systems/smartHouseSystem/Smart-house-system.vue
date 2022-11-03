<template>
  <div class="smart-house-system">
    <div class="system-header">
      <div class="green-quadrat"></div>
      <div class="system-header__title">
        <h2>Система "Умный дом"</h2>
        <p>
          Умный дом – это комплекс автоматизации основных инженерных систем
          Вашего жилища. Управление и контроль за тем или иным элементом системы
          может быть осуществлён, например, удаленно с помощью смартфона или
          планшета. Список подобных систем:
        </p>
      </div>
    </div>

    <!-- Список сервисов -->

    <div class="system-items">
      <div class="sys-item">
        <img src="@/assets/images/svg/lamp.svg" alt="" class="sys-item__img" />
        <h3>Управление освещением</h3>
        <p>
          Оборудование жилья интеллектуальным освещением - самый популярный
          элимент системы.
        </p>
        <div class="sys-item__link">
          <router-link to="/electrisity">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img
          src="@/assets/images/svg/garage.svg"
          alt=""
          class="sys-item__img"
        />
        <h3>Управление шторми/жалюзи</h3>
        <p>
          Система умный дом позволяет вам открывать и закрывать шторы одоним
          нажатием клавиши на выключателе, смартфоне или планшете.
        </p>
        <div class="sys-item__link">
          <router-link to="/curtains-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img src="@/assets/images/svg/drops.svg" alt="" class="sys-item__img" />
        <h3>Защита от протечек</h3>
        <p>
          Благодаря датчикам защиты от протечек, установленных в "мокрых" зонах,
          система вовремя перекроет только то место, где возникла аварийная
          ситуация.
        </p>
        <div class="sys-item__link">
          <router-link to="/water-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img
          src="@/assets/images/svg/temperature.svg"
          alt=""
          class="sys-item__img"
        />
        <h3>Климат-контроль</h3>
        <p>
          Система климат-контроля отвечает за работу обогревателей, тёплых
          полов, кондиционеров, ионизаторов, улажнителей и осушителей воздуха.
        </p>
        <div class="sys-item__link">
          <router-link to="/climate-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img
          src="@/assets/images/svg/music-note.svg"
          alt=""
          class="sys-item__img"
        />
        <h3>Аудио-мультирум</h3>
        <p>
          Технология мультирум, так называемая "подзвучка" помещений,
          предназначена для создания фоновой музыки и отличного настроения.
        </p>
        <div class="sys-item__link">
          <router-link to="/audio-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img src="@/assets/images/svg/wifi.svg" alt="" class="sys-item__img" />
        <h3 style="margin-bottom: 10px">Беспроводная компьютерная сеть</h3>
        <p>
          Установленная сеть Wi-Fi позволит функционировать вашему оборудованию
          в любой точке дома, квартиры и даже участка возле дома.
        </p>
        <div class="sys-item__link">
          <router-link to="/wi-fi">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img
          src="@/assets/images/svg/security-camera.svg"
          alt=""
          class="sys-item__img"
        />
        <h3>Видионаблюдение</h3>
        <p>
          Система видионаблюдения - трансляция передается как с камер наружнего
          наблюдения, так и камер установленных внутри всех помещений.
        </p>
        <div class="sys-item__link">
          <router-link to="/video-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>

      <div class="sys-item">
        <img
          src="@/assets/images/svg/access-term.svg"
          alt=""
          class="sys-item__img"
        />
        <h3>Контроль доступа</h3>
        <p>
          Видиодомофон передает изображение гостя на любой монитор, планшет,
          панель управления или даже на спортивый тренажер.
        </p>
        <div class="sys-item__link">
          <router-link to="/access-controle">
            <div class="link-icon"></div>
            <span style="display: block">Подробнее</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmartHouseSystem",
};
</script>

<style>
</style>