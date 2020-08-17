window.onload =  function(){

	const content_destaques = document.querySelector('.content-destaques')
				
	const destaques = new Destaques()
	destaques.carregaItens(content_destaques)


}

function Menu(btn,content,menuLista){
	this.content = content
	this.btn = btn
	this.btnsSubmenus =[]
	this.submenus = []
	this.itens = [
			
			{	
				nome:'Home',
				link:'',
				subItens:[]
			},
			{
				nome:'Timeline',
				link:'#',
				subItens:[] 
			},
			{
				nome:'Categorias',
				link:'#',
				subItens:[
					{
						nome:'Esporte',
						link:'#'
					},
					{
						nome:'Politica',
						link:'#'
					},
					{
						nome:'Educação',
						link:'#'
					},
					{
						nome:'Entrenimento',
						link:'#'
					}
				]	
			},
			{
				nome:'Anuncie',
				link:'#',
				subItens:[]
			},
			{
				nome:'Contato',
				link:'#',
				subItens:[
					{
						nome:'Email',
						link:'#'
					},
					{
						nome:'Whatsapp',
						link:'#'
					}
				]
			},
			{
				nome:'Sobre',
				link:'#',
				subItens:[]
			}

		]

	this.toggleMenu = (classeBtn, classeContent)=>{

		this.btn.classList.toggle(classeBtn)
		this.content.classList.toggle(classeContent)

	}

	this.carregaItens = (menuLista)=>{

		//console.log(menuLista)
		
		let listaItens = []

		this.itens.forEach(e=>{
			listaItens.push(e)
			let li = document.createElement('li')
			let a = document.createElement('a')
			a.setAttribute('href',`${e.link}`)
			a.classList.add('item-menu')
			a.innerHTML = e.nome
			li.appendChild(a)
			menuLista.appendChild(li)
			
			if(e.subItens.length>0){
				let listaSubitens = e.subItens
				this.btnsSubmenus.push(a)
				a.classList.add('btn-submenu')
				let icon = document.createElement('span')
				icon.classList.add('icon-submenu')
				icon.innerHTML += '<i class="fas fa-chevron-right"></i>'
				a.appendChild(icon)
				let submenu=document.createElement('ul')
				submenu.classList.add('submenu')
				this.submenus.push(submenu)
				li.appendChild(submenu)

				listaSubitens.forEach(e=>{
					let li = document.createElement('li')
					let a = document.createElement('a')
					a.setAttribute('href',`${e.link}`)
					a.classList.add('item-submenu')
					a.innerHTML = e.nome
					li.appendChild(a)
					submenu.appendChild(li)
				})
	
			}

		})

		//console.log(listaItens)

	}

	this.toggleBtnSubmenu = ()=>{
		let btns = this.btnsSubmenus
		btns.forEach(e=>{
			
			e.addEventListener('click',()=>{

				this.abrirSubmenu(e)

			})

		})
	}

	this.abrirSubmenu = (btn)=>{

		let submenu = btn.nextElementSibling


			let alturaSubmenu = !!submenu.style.maxHeight
			
			if(alturaSubmenu){
				submenu.style.maxHeight = null
				btn.classList.toggle('btn-submenu-active')
			}else{
				this.submenus.forEach(e=>{
					let altura = e.style.maxHeight

					if(altura){
						e.style.maxHeight = null
						let btnSubmenuaberto = e.previousElementSibling
						btnSubmenuaberto.classList.toggle('btn-submenu-active')
					}

				})

				submenu.style.maxHeight=submenu.scrollHeight+'px'
				btn.classList.toggle('btn-submenu-active')
			}

			

	}

	
	

}

function Destaques(){

	this.getItens = ()=>{
		/*
			esse metodo deve validar as quatro noticias mais vista da semana
			e ranquear os 4 e retornalos na oredem do mais vista para o menos visto

			vai retorna um array de objt
			cada objt vai ser uma noticia destaque
		*/
		let listaItens = '...'
	}
	
	this.itens = [
		{
			titulo:'Este é o titulo da primeira noticia',
			subtitulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi distinctio',
			categoria:'Esporte',
			data:'Há 10 horas',
			thubnail:'img/destaques/destaque1.jpg',
			link:'https://ze-aglailson.github.io/IpuaOnline/'
		},
		{
			titulo:'Este é o titulo da segunda noticia',
			subtitulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi distinctio',
			categoria:'Educação',
			data:'Há 5 horas',
			thubnail:'img/destaques/destaque2.jpg',
			link:'#'
		},
		{
			titulo:'Este é o titulo da terceira noticia',
			subtitulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi distinctio',
			categoria:'Politica',
			data:'Há 1 hora',
			thubnail:'img/destaques/destaque3.jpg',
			link:'#'
		},
		{
			titulo:'Este é o titulo da quarta noticia',
			subtitulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi distinctio',
			categoria:'Esporte',
			data:'Há 3 horas',
			thubnail:'img/destaques/destaque4.jpg',
			link:'#'
		}
	]

	this.carregaItens = (content)=>{

		this.itens.forEach((item,indice)=>{

			let article = document.createElement('article')
			article.setAttribute('class',`destaque destaque-${indice+1}`)
			
			let link = document.createElement('a')
			link.setAttribute('style','height: 100%; display: block;')
			link.href= item.link
			article.appendChild(link)

			let background = document.createElement('div')
			background.setAttribute('class',`bg-destaque bg-destaque-${indice+1}`)
			background.style.backgroundImage = `url(${item.thubnail})`
			article.appendChild(background)

			let detalhes = document.createElement('div')
			detalhes.setAttribute('class','titles-destaque')

			let data_categoria = document.createElement('div')
			data_categoria.setAttribute('class','data-categoria-destaque')

			let data = document.createElement('span')
			data.setAttribute('class','data')
			data.innerHTML = item.data
			data_categoria.appendChild(data)

			let categoria = document.createElement('span')
			categoria.setAttribute('class','categoria')
			categoria.innerHTML = item.categoria
			data_categoria.appendChild(categoria)

			detalhes.appendChild(data_categoria)

			let titulo_subtitulo = document.createElement('div')
			titulo_subtitulo.setAttribute('class','title-subtitle-destaque')

			let titulo = document.createElement('h2')
			titulo.setAttribute('class','title-destaque')
			titulo.innerHTML = item.titulo
			titulo_subtitulo.appendChild(titulo)

			let subtitulo = document.createElement('p')
			subtitulo.setAttribute('class','subtitle-destaque')
			subtitulo.innerHTML = item.subtitulo
			titulo_subtitulo.appendChild(subtitulo)

			detalhes.appendChild(titulo_subtitulo)
			article.appendChild(detalhes)

			content.appendChild(article)

			console.log(article)

		})

	}

}

