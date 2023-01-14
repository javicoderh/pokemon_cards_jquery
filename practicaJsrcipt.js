const getBody = document.body
const fragment = document.createDocumentFragment();
const card = fragment
.appendChild(document.createElement('div'))
fragment.querySelector('div').appendChild(document.createElement('img'))
fragment.querySelector('div').appendChild(document.createElement('h4'))
fragment.querySelector('div').appendChild(document.createElement('h2'))
fragment.querySelector('div').appendChild(document.createElement('img'))
fragment.querySelector('div').appendChild(document.createElement('hr'))
fragment.querySelector('div').appendChild(document.createElement('h3'));
fragment.querySelector('div').appendChild(document.createElement('p'));
fragment.querySelector('div').appendChild(document.createElement('br'));
fragment.querySelector('div').appendChild(document.createElement('hr'));
fragment.querySelector('div').appendChild(document.createElement('h5'));
fragment.querySelector('div').appendChild(document.createElement('section'));

function createPikachuCard(){
 getBody.appendChild(fragment)
 card.querySelector('img').classList.add('type')
 card.querySelector('.type').setAttribute("src", "https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png")
 document.querySelector('div').classList.add('card')
 document.querySelector('h4').textContent = '50HP'
 document.querySelector('h4').classList.add('hp')
 document.querySelector('div').style.background = 'url(https://wallpaperaccess.com/full/2609782.jpg)'
 card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
 card.querySelector('h2').style.color = 'black'
 card.querySelector('h3').style.color = 'black'
 card.querySelector('h4').style.color = 'black'
 card.querySelector('h5').style.color = 'black'
 card.querySelector('p').style.color = 'black'
 card.querySelector('h3').style.backgroundColor = 'transparent'
 card.querySelector('p').style.backgroundColor = 'transparent'
 document.querySelector('h2').textContent = 'Pikachu'
 card.querySelector('h3').textContent = 'Thunder - 30'
 card.querySelector('p').textContent = 'Flip a coin if heads enemy is paralized'
 card.querySelector('hr:nth-child(n+2)').classList.add('footLine')
 card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://www.teahub.io/photos/full/256-2563418_pikachu-using-thunderbolt.jpg")
 card.querySelector('h5').textContent = 'Pikachu has strong electric attacks that may paralize foes due to his intensity'
 card.querySelector('section').innerHTML = 
'<section class="energyContainer">' 
+ '<img src="https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png" height="30" alt="">'
+ '<img src="https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png" height="30" alt="">'
+ '<img src="https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png" height="30" alt="">'
+ '<img src="https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png" height="30" alt="">'
+ '</section>'
card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
}

function createBulbasaurCard(){
 getBody.appendChild(fragment)
 card.querySelector('img').classList.add('type')
 card.querySelector('.type').setAttribute("src", "https://simg.nicepng.com/png/small/201-2016861_grass-type-symbol-pokemon-tcg-pokemon-card-grass.png")
 document.querySelector('div').classList.add('card')
 document.querySelector('h4').textContent = '60HP'
 document.querySelector('h4').classList.add('hp')
 document.querySelector('div').style.background = 'url(https://i.pinimg.com/736x/29/7d/ef/297defc67503f4edfb179937766b7d10.jpg)'
 card.querySelector('h2').style.color = 'white'
 card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
 card.querySelector('h3').style.color = 'white'
 card.querySelector('h4').style.color = 'white'
 card.querySelector('h5').style.color = 'white'
 card.querySelector('p').style.color = 'white'
 document.querySelector('h2').textContent = 'Bulbasaur'
 card.querySelector('h3').textContent = 'Drain Seeds  30'
 card.querySelector('p').textContent = 'For the nex 2 turns enemy loses 10hp and Bulbasaur gains 10hp'
 card.querySelector('hr:nth-child(n+2)').classList.add('footLine')
 card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://alfabetajuega.com/hero/2021/09/bulbasaur-pokemon.jpg?width=1200")
 card.querySelector('h5').textContent = 'Bulbasaur drains enemies hp with his leech seeds'
 card.querySelector('section').innerHTML = 
'<section class="energyContainer">' 
+ '<img src="https://simg.nicepng.com/png/small/201-2016861_grass-type-symbol-pokemon-tcg-pokemon-card-grass.png" height="30" alt="">'
+ '<img src="https://simg.nicepng.com/png/small/201-2016861_grass-type-symbol-pokemon-tcg-pokemon-card-grass.png" height="30" alt="">'
+ '</section>'
card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
}

function createCharizardCard(){
getBody.appendChild(fragment)
card.querySelector('img').classList.add('type')
card.querySelector('.type').setAttribute("src", "https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png")
document.querySelector('div').classList.add('card')
document.querySelector('h4').textContent = '120HP'
document.querySelector('h4').classList.add('hp')
document.querySelector('div').style.background = 'url(https://w0.peakpx.com/wallpaper/350/555/HD-wallpaper-crimson-red-swirls-textured-crimson-red-swirls-re.jpg)'
card.querySelector('h2').style.color = 'white'
card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
card.querySelector('h3').style.color = 'white'
card.querySelector('h4').style.color = 'white'
card.querySelector('h5').style.color = 'white'
card.querySelector('p').style.color = 'white'
document.querySelector('h2').textContent = 'Charizard'
card.querySelector('h3').textContent = 'Fire blast - 120'
card.querySelector('p').textContent = 'In order to use this attack you must discard one of charizard`s attached fire energy'
card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://c4.wallpaperflare.com/wallpaper/19/192/932/pokemon-charizard-wallpaper-preview.jpg")
card.querySelector('h5').textContent = 'Charizard attacks with his powerfull fire breath'
card.querySelector('section').innerHTML = 
'<section class="energyContainer">' 
+ '<img src="https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png" height="20" alt="">'
+ '<img src="https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png" height="20" alt="">'
+ '<img src="https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png" height="20" alt="">'
+ '<img src="https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png" height="20" alt="">'
+ '</section>'
card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
}

function createFeraligatorCard(){
 getBody.appendChild(fragment)
 card.querySelector('img').classList.add('type')
 card.querySelector('.type').setAttribute("src", "https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png")
 document.querySelector('div').classList.add('card')
 document.querySelector('h4').textContent = '120HP'
 document.querySelector('h4').classList.add('hp')
 document.querySelector('div').style.background = 'url(https://i.pinimg.com/originals/fc/fa/9b/fcfa9b380516309c424f78d486d0bc47.jpg)'
 card.querySelector('h2').style.color = 'white'
 card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
 card.querySelector('h3').style.color = 'white'
 card.querySelector('h4').style.color = 'white'
 card.querySelector('h5').style.color = 'white'
 card.querySelector('p').style.color = 'white'
 document.querySelector('h2').textContent = 'Feraligator'
 card.querySelector('h3').textContent = 'slash - 60'
 card.querySelector('p').textContent = 'powerull claws attack'
 card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://rare-gallery.com/uploads/posts/1066118-illustration-anime-cartoon-Pok-mon-comics-ishmam-Feraligatr-fictional-character-comic-book.png")
 card.querySelector('h5').textContent = 'This strong water pokemon can be used for long travels across the sea'
 card.querySelector('section').innerHTML = 
 '<section class="energyContainer">' 
 + '<img src="https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png" height="20" alt="">'
 + '<img src="https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png" height="20" alt="">'
 + '<img src="https://i.pinimg.com/originals/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.png" height="20" alt="">'
 + '</section>'
 card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
 }

 function createAlakazamCard(){
  getBody.appendChild(fragment)
  card.querySelector('img').classList.add('type')
  card.querySelector('.type').setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNwNi1hYThjMzg5NC1kN2JmLTQ1MGItOTliZS1mNjA4ZDE0ZTFlNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4aysByqaS8SKRJUpHQbE__gimNY-udcdRhXjC4Ed2eM")
  document.querySelector('div').classList.add('card')
  document.querySelector('h4').textContent = '90HP'
  document.querySelector('h4').classList.add('hp')
  document.querySelector('div').style.background = 'url(https://t3.ftcdn.net/jpg/03/16/89/46/360_F_316894603_ZXvGjKS3QOm2eY67r34tLQjdJ3ha3LWS.jpg)'
  card.querySelector('h2').style.color = 'white'
  card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
  card.querySelector('h3').style.color = 'white'
  card.querySelector('h4').style.color = 'white'
  card.querySelector('h5').style.color = 'white'
  card.querySelector('p').style.color = 'white'
  document.querySelector('h2').textContent = 'Alakazam'
  card.querySelector('h3').textContent = 'Psybeam - 60'
  card.querySelector('p').textContent = 'Flip a coin, if heads enemy is confused'
  card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://wallpapercave.com/wp/wp2424872.jpg")
  card.querySelector('h5').textContent = 'The most powerfull psychiq pokemon'
  card.querySelector('section').innerHTML = 
  '<section class="energyContainer">' 
  + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNwNi1hYThjMzg5NC1kN2JmLTQ1MGItOTliZS1mNjA4ZDE0ZTFlNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4aysByqaS8SKRJUpHQbE__gimNY-udcdRhXjC4Ed2eM" height="20" alt="">'
  + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNwNi1hYThjMzg5NC1kN2JmLTQ1MGItOTliZS1mNjA4ZDE0ZTFlNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4aysByqaS8SKRJUpHQbE__gimNY-udcdRhXjC4Ed2eM" height="20" alt="">'
  + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3p6-aa8c3894-d7bf-450b-99be-f608d14e1e4a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNwNi1hYThjMzg5NC1kN2JmLTQ1MGItOTliZS1mNjA4ZDE0ZTFlNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4aysByqaS8SKRJUpHQbE__gimNY-udcdRhXjC4Ed2eM" height="20" alt="">'
  + '</section>'
  card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
  }

  function createHitmonleeCard(){
   getBody.appendChild(fragment)
   card.querySelector('img').classList.add('type')
   card.querySelector('.type').setAttribute("src", "https://ih1.redbubble.net/image.402377384.5407/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg")
   document.querySelector('div').classList.add('card')
   document.querySelector('h4').textContent = '60HP'
   document.querySelector('h4').classList.add('hp')
   document.querySelector('div').style.background = 'url(https://media.istockphoto.com/id/848773824/photo/brown-background.jpg?s=170667a&w=0&k=20&c=6_U2TbMFI0sGz7KqROxGlUMvdggDKBS05Fu_-5VLIAU=)'
   card.querySelector('h2').style.color = 'white'
   card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
   card.querySelector('h3').style.color = 'white'
   card.querySelector('h4').style.color = 'white'
   card.querySelector('h5').style.color = 'white'
   card.querySelector('p').style.color = 'white'
   card.querySelector('h3').style.backgroundColor = 'transparent'
   card.querySelector('p').style.backgroundColor = 'transparent'
   document.querySelector('h2').textContent = 'Hitmonlee'
   card.querySelector('h3').textContent = 'High jump kick - 50'
   card.querySelector('p').textContent = 'a strong air kick'
   card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://wallpapercave.com/wp/wp2451676.jpg")
   card.querySelector('h5').textContent = 'Inspired on Bruce Lee`s kicks this pokemon will be one of your best duel weapons'
   card.querySelector('section').innerHTML = 
   '<section class="energyContainer">' 
   + '<img src="https://ih1.redbubble.net/image.402377384.5407/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" height="20" alt="">'
   + '<img src="https://ih1.redbubble.net/image.402377384.5407/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" height="20" alt="">'
   + '<img src="https://ih1.redbubble.net/image.402377384.5407/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" height="20" alt="">'
   + '</section>'
   card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
   }

   function createTyranitarCard(){
    getBody.appendChild(fragment)
    card.querySelector('img').classList.add('type')
    card.querySelector('.type').setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4az-9be9ea46-fdf8-4e18-957e-9c7fcded42e5.png/v1/fill/w_720,h_720,strp/dark_energy_by_humac1_d50w4az-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGF6LTliZTllYTQ2LWZkZjgtNGUxOC05NTdlLTljN2ZjZGVkNDJlNS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7GbSWxHrGsP-onFWhchqfZziYMeQ7tUS8kVNPSr2g54")
    document.querySelector('div').classList.add('card')
    document.querySelector('h4').textContent = '140HP'
    document.querySelector('h4').classList.add('hp')
    document.querySelector('div').style.background = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-H5dNxjGA-83ifD3OORFDb6j5Mp3zpHnl8WGfyrVm2DXY4YZsp0Mi1fB7KWBMF6Kr7Ug&usqp=CAU)'
    card.querySelector('h2').style.color = 'white'
    card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px silver'
    card.querySelector('h3').style.color = 'white'
    card.querySelector('h4').style.color = 'white'
    card.querySelector('h5').style.color = 'white'
    card.querySelector('p').style.color = 'white'
    card.querySelector('h3').style.backgroundColor = 'transparent'
    card.querySelector('p').style.backgroundColor = 'transparent'
    document.querySelector('h2').textContent = 'Tyranitar'
    card.querySelector('h3').textContent = 'Hyperbeam - 80'
    card.querySelector('p').textContent = 'Discard an energy attached to the defending pokemon'
    card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://i.pinimg.com/736x/32/44/52/324452e533d12e7fa3d394dec28700f7.jpg")
    card.querySelector('h5').textContent = 'Beware of this pokemon strong bite and darkness powers'
    card.querySelector('section').innerHTML = 
    '<section class="energyContainer">' 
    + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8" height="20" alt="">'
    + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8" height="20" alt="">'
    + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4az-9be9ea46-fdf8-4e18-957e-9c7fcded42e5.png/v1/fill/w_720,h_720,strp/dark_energy_by_humac1_d50w4az-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGF6LTliZTllYTQ2LWZkZjgtNGUxOC05NTdlLTljN2ZjZGVkNDJlNS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7GbSWxHrGsP-onFWhchqfZziYMeQ7tUS8kVNPSr2g54" height="20" alt="">'
    + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4az-9be9ea46-fdf8-4e18-957e-9c7fcded42e5.png/v1/fill/w_720,h_720,strp/dark_energy_by_humac1_d50w4az-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGF6LTliZTllYTQ2LWZkZjgtNGUxOC05NTdlLTljN2ZjZGVkNDJlNS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7GbSWxHrGsP-onFWhchqfZziYMeQ7tUS8kVNPSr2g54" height="20" alt="">'
    + '</section>'
    card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
    }

    function createEveeCard(){
     getBody.appendChild(fragment)
     card.querySelector('img').classList.add('type')
     card.querySelector('.type').setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8")
     document.querySelector('div').classList.add('card')
     document.querySelector('h4').textContent = '40HP'
     document.querySelector('h4').classList.add('hp')
     document.querySelector('div').style.background = 'url(https://cdn.shopify.com/s/files/1/2198/0277/products/my3401_800x.jpg?v=1587483251)'
     card.querySelector('img:nth-child(n+2)').style.border = 'solid 2px black'
     card.querySelector('h2').style.color = 'black'
     card.querySelector('h3').style.color = 'black'
     card.querySelector('h4').style.color = 'black'
     card.querySelector('h5').style.color = 'black'
     card.querySelector('p').style.color = 'black'
     card.querySelector('h3').style.backgroundColor = 'transparent'
     card.querySelector('p').style.backgroundColor = 'transparent'     
     document.querySelector('h2').textContent = 'Evee'
     card.querySelector('h3').textContent = 'Tackle - 20'
     card.querySelector('p').textContent = 'Evee hits with his entire body after a short run'
     card.querySelector('img:nth-child(n+2)').setAttribute("src", "https://www.nawpic.com/media/2020/nawpic-530-e1668717391557.jpg")
     card.querySelector('h5').textContent = 'This is the evolving pokemon having different evolutions for every element'
     card.querySelector('section').innerHTML = 
     '<section class="energyContainer">' 
     + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8" height="20" alt="">'
     + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8" height="20" alt="">'
     + '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8" height="20" alt="">'
     + '</section>'
     card.querySelector('.energyContainer').style.backgroundColor = 'transparent'
     }

 
