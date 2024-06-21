var div = document.createElement('div')
div.id = 'divTP1'

var strong1 = document.createElement('strong')
strong1.textContent = "World Wide Web Consortium"
var strong2 = document.createElement('strong')
strong2.textContent = "W3C"
var a1 = document.createElement('a')
a1.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation"
a1.title = "Organisme de normalisation"
a1.textContent = "organisme de standardisation"
var a2 = document.createElement('a')
a2.href="http://fr.wikipedia.org/wiki/World_Wide_Web"
a2.title="World Wide Web"
a2.textContent = "World Wide Web"

var aa = document.createTextNode('Le ')
var ab = document.createTextNode(', abrégé par le sigle ')
var ac = document.createTextNode(', est un  ')
var ad = document.createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du')

div.appendChild(aa)
div.appendChild(strong1)
div.appendChild(ab)
div.appendChild(strong2)
div.appendChild(ac)
div.appendChild(a1)
div.appendChild(ad)
div.appendChild(a2)

document.body.append(div)

alert(document.domain)