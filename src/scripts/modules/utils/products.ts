const $linksProducts: NodeListOf<HTMLButtonElement> =
  document.body.querySelectorAll('.products__button')
const $tabsElements: NodeListOf<HTMLElement> =
  document.body.querySelectorAll('.products__product')
const $productsSection: HTMLElement | null = document.querySelector('.products')

$linksProducts.forEach((link) => setShowProductHandler(link))

function setShowProductHandler(link) {
  const currentButtomName = link.dataset.buttonTab
  link.addEventListener('click', showTab)

  function showTab() {
    $linksProducts.forEach((link) =>
      link.classList.remove('products__button_active')
    )
    $tabsElements.forEach((tab) =>
      tab.classList.remove('products__product_active')
    )

    link.classList.add('products__button_active')
    document
      .getElementById(currentButtomName)
      ?.classList.add('products__product_active')

    if (currentButtomName === 'spf' || currentButtomName === 'busters') {
      $productsSection?.classList.add('products_beige')
    } else {
      $productsSection?.classList.remove('products_beige')
    }
  }
}
