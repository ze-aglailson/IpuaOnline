window.onload =  function(){




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