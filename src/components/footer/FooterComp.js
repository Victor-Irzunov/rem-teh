import { Button } from 'antd'
import React, { useState } from 'react'
import { DrawerComp } from '../drawer/DrawerComp'
import { DrawerCompForms } from '../drawer/DrawerCompForms'
import { GiftOutlined } from '@ant-design/icons'

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
			if (typeof (url) != 'undefined') {
				window.location = url;
			}
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
		<footer className='pt-12 pb-1 w-full z-10 border border-t-gray-400 relative' id='contact'>
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
						href='tel:80339174921'
						className='text-3xl mb-3'
						onClick={() => gtag_report_conversion('/')}
					>
						+375(33) 917-49-21
					</a>
					<a
						href='tel:80257302610'
						className='text-3xl'
						onClick={() => gtag_report_conversion('/')}
					>
						+375(25) 730-26-10
					</a>
				</div>

				<div className=''>
					<p className='text-xs uppercase'>
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
      font-normal
      text-center
      sm:text-base
      xyy:text-[10px]
    text-gray-400/90
		mb-0
      ">
						Copyright Ⓒ 2018-2023. Разработка и продвижение
						<a href="https://vi-tech.by" className="text-cyan-500" target="_blank"> VI:TECH</a>
						. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
					</p>
				</div>
			</div>
			<DrawerCompForms open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</footer>
	)
}
