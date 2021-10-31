window.onload = () => {
  var root = document.querySelector(':root')

  root.style.setProperty(
    '--bg-color',
    tinycolor('#ff0000').lighten().toString(),
  )

  root.style.setProperty('--title-color', tinycolor.random())
}
