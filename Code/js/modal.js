window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#header__btn_open_menu').addEventListener('click', function(){
    document.querySelector('#header__menu_modal').classList.add('header__nav-is-active')
  })
  document.querySelector('#header__btn_close_menu').addEventListener('click', function(){
    document.querySelector('#header__menu_modal').classList.remove('header__nav-is-active')
  })

  document.querySelectorAll('.how__list-btn').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how__container-info').forEach(function (tabContent) {
        tabContent.classList.remove('how__tab_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__tab_active')
    })
  })
})