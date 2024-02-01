import { Button, Image } from 'antd'
import React, { useState } from 'react'
import { DrawerComp } from '../drawer/DrawerComp'
import { DrawerCompForms } from '../drawer/DrawerCompForms'
import { GiftOutlined } from '@ant-design/icons'
import pchelka from '../../images/pchelka.webp'
import pchelka2 from '../../images/pchelka2.webp'

export const FooterComp = () => {
	const [open, setOpen] = useState(false)

	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	function gtag_report_conversion(url) {
		var callback = function () {
			// if (typeof (url) != 'undefined') {
			// 	window.location = url;
			// }
		};
		window.gtag('event', 'conversion', {
			'send_to': 'AW-11119129579/7lYiCID-wPoDEOvngbYp',
			'event_callback': callback
		});
		return false;
	}

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}



	return (
		<footer className='pt-12 pb-1 w-full z-10  bg-yellow-500 relative' id='contact'>
			<div className='container mx-auto text-center'>
				<div className=''>
					<h2 className='text-xl uppercase tracking-wider'>
						Ремонт<span className=''> бытовой техники</span> в Минске
					</h2>
				</div>
				<div className=''>
					<p className=' font-light text-sm'>Наши мастера имеют огромный опыт работы, а это профессиональная диагностика и качественный ремонт любой сложности с гарантией.</p>
				</div>

				{/* <div className='mt-10 mb-8'>
					<GiftOutlined className='text-orange-500 text-4xl' />
					<p className='text-white font-light mt-5'>
						Подарки каждому клиенту магнитики и средство для очистки
					</p>
				</div> */}

				<h3 className=' font-light uppercase'>Заказать услугу можно по телефонам</h3>

				<div className=' mb-6 mt-5 flex flex-col'>
					<a
						href='tel:80333504025'
						className='text-3xl mb-3'
						onClick={() => gtag_report_conversion('/')}
					>
						+375 (33) 350-40-25
					</a>
					<a
						href='tel:80259311762'
						className='text-3xl'
						onClick={() => gtag_report_conversion('/')}
					>
						+375 (25) 931-17-62
					</a>
				</div>

				<div className=''>
					<p className='text-xs uppercase '>
						запишитесь заранее на определённое время и получите скидку<span className='font-semibold text-sm'> 15%</span> на ремонт Вашей техники.
					</p>
					<Button
						type='primary'
						className='uppercase'
						onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
					>
						Записаться
					</Button>
				</div>


				<div className='mt-10 text-center text-black font-light text-xs xyy:max-w-xs sd:max-w-2xl mx-auto'>
					<p className=''>
						ИП Дашкевич УНП 791325640 Регистрация в Торговом реестре №7190020 от 06.03.2023. Государственная регистрация от 06.03.2023, Администрация первомайского района город Бобруйск. Номер плательщика в ЕРИП: 7190020
					</p>
				</div>

				<div className='absolute bottom-40 xyy:left-5 sd:left-28'>
					<Image src={pchelka} alt='Символ компании' width={60} />
				</div>
				<div className='absolute bottom-10 xyy:right-5 sd:right-20'>
					<Image src={pchelka2} alt='Символ компании' width={55} />
				</div>

				<div className="
    w-full 
    flex
    justify-center
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xyy:pt-1 
    border-t-[1px]
    border-t-[#3F3E45]
	 mt-10
    ">
					<p className="
      font-poppins
      font-light
      text-center
      sm:text-sm
      xyy:text-[10px]
    text-black/70
		mb-0
      ">
						Copyright Ⓒ 2018-2023. Разработка и продвижение
						<a href="https://vi-tech.by" className="text-blue-700" target="_blank"> VI:TECH</a>
						. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
					</p>
				</div>
			</div>
			<DrawerCompForms open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</footer>
	)
}
