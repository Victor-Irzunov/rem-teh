import React, { useState } from 'react'
import { Image, Affix } from 'antd'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined } from '@ant-design/icons'
import { useScreens } from '../../../constants/Constants'
// import { DrawerComp } from '../../drawer/DrawerComp'
import logo4 from '../../../images/logo/24_7_1.svg'
import logo from '../../../images/logo/1.svg'
import mts from '../../../images/mts.svg'
import logo2 from '../../../images/logo/fridge.svg'
import logo3 from '../../../images/logo/washing-machine.svg'
import { DrawerCompForms } from '../../drawer/DrawerCompForms'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

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

	return (
		<>
			{
				screens.lg
					?
					<div className='bg-white'>
						<div className='container mx-auto flex justify-between items-center'>
							<div className='flex justify-start items-center'>
								{/* <Image src={logo} preview={false} width='80px' /> */}
								<div className='flex items-center'>
									<div className='flex flex-col items-start text-[#5338FF]'>
										<span className='uppercase' >
											ремонт
										</span>
										<span className='uppercase text-2xl font-semibold leading-none'>
											бытовой
										</span>
										<div className='flex justify-between items-center w-full'>
											<span className='text-xs'>
												техники

											</span>
											<Image src={logo} preview={false} width='15px' />
											<Image src={logo2} preview={false} width='15px' />
											<Image src={logo3} preview={false} width='15px' />
										</div>
									</div>
								</div>
							</div>
							<div className='flex text-xl items-center '>
								<ClockCircleOutlined />
								<span className='uppercase ml-2 font-light mr-0.5'>контакт центр 24</span>
								<span>/</span>
								<span className='uppercase ml-0.5 font-light'>7</span>
							</div>
							<div className=''>
								<div className='flex text-lg text-orange-500'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl' />
									<div className='flex items-end'>
										<a href='tel:80339174921' className='text-2xl'>+375(33) 917-49-21</a>
										<span className='ml-1.5 font-extralight text-[#fb923c]'>мтс</span>
									</div>
								</div>
								<div className='flex text-lg'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl text-orange-500' />
									<div className='flex items-end'>
										<a href='tel:80257302610' className='text-2xl text-orange-500'>+375(25) 730-26-10</a>
										<span className='ml-1.5 font-extralight text-orange-500'>life</span>
									</div>
								</div>

							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm mb-1'>Напишите нам</p>
								<div>
									<a href='https://t.me/Alex150685'>
										<Image src={telegram} preview={false} style={{ width: '30px' }} />
									</a>
									<a href='https://wa.me/375257302610?text=нужен%ремонт%20'>
										<Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '8px' }} />
									</a>
									<a href='viber://chat?number=%2B375339174921'>
										<Image src={viber} preview={false} style={{ width: '30px', marginLeft: '8px' }} />
									</a>
								</div>
							</div>
						</div>
					</div>
					:

					<div className='flex flex-col justify-between items-center pt-20 relative z-10 
			border border-b-gray-300
					bg-white/20
					 '>
						<div className='flex items-center text-xs mb-2'>
							<Image src={logo4} preview={false} width='20px' className='invert' />
							<span className='uppercase ml-2 mr-0.5 text-black'>контакт центр 24</span>
							<span className='text-black'>/</span>
							<span className='uppercase ml-0.5 text-black'>7</span>
						</div>
						<div className='flex flex-col text-sm items-center'>
							<div>
								<ClockCircleOutlined />
								<span className='uppercase ml-1 mr-1'>выезд мастера</span>
							</div>
							<div className='pl-3'>
								<span className='tracking-widest'>09:00-22:00</span>
								<span className='uppercase ml-0.5 text-[10px]'>пн-вс</span>
							</div>
						</div>
						<div className='mt-2 mb-2'>
							<div className='text-lg'>
								<div className='flex items-center pl-12'>
									<a href='tel:80339174921'
										className='xyy:text-xl xy:text-2xl'
										onClick={() => gtag_report_conversion('/')}
									>
										+375 33 917-49-21
									</a>
									<Image src={mts} className='ml-2' preview={false} width={60}/>
								</div>
								{/* <div className='flex items-end pl-7 mt-2'>
									<a
										href='tel:80257302610'
										className='text-2xl'
										onClick={() => gtag_report_conversion('/')}
									>
										+375(25) 730-26-10
									</a>
									<span className='ml-1 font-extralight text-[15px]'>life</span>
								</div> */}
							</div>
						</div>
						<div className='flex flex-col items-center mb-2'>
							<p className='text-sm text-[#5338FF] mb-2 uppercase'
								onClick={() => showDrawer('top', 'Заказать звонок')}
							>
								<ShakeOutlined />{' '}
								Заказать звонок
							</p>

							<div className='z-20'>
								<a href='https://t.me/@Alex150685' target='_blank'>
									<Image src={telegram} preview={false} style={{ width: '30px' }} />
								</a>
								<a href='https://wa.me/375257302610?text=нужен%ремонт%20'
								>
									<Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} />
								</a>
								<a href='viber://chat?number=%2B375339174921'>
									<Image src={viber} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} />
								</a>
							</div>
						</div>
						<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
					</div>
			}
			<DrawerCompForms open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
