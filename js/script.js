//----------------------строка поиска---------------------
document
  .querySelector('.search-input')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      let searchTerm = event.target.value
      console.log('Подьзователь искал:', searchTerm)
      if (searchTerm.toLowerCase() === 'пушкин') {
        window.location.href = 'restaurant.html'
      }
      event.preventDefault()
    }
  })
//--------------------------------------------------------
const languageSelect = document.getElementById('language-select')

languageSelect.addEventListener('change', function () {
  const selectedLanguage = languageSelect.value
  translatePage(selectedLanguage)
})

function translatePage(language) {
  document.documentElement.lang = language
  console.log('Выбран язык:', language)
}
