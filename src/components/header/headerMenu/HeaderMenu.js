import React, { useState } from 'react'
import { useScreens } from '../../../constants/Constants'
import { Affix, Button, Image } from 'antd'
import { motion, AnimatePresence } from "framer-motion"
import { ShakeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import logo from '../../../images/logo/logo.webp'
// import logo from '../../../images/logo/1.svg'
// import logo2 from '../../../images/logo/fridge.svg'
// import logo3 from '../../../images/logo/washing-machine.svg'
import { Link } from 'react-router-dom'

// import { Link as LinkScroll } from 'react-scroll'
import { DrawerCompForms } from '../../drawer/DrawerCompForms'

export const HeaderMenu = ({ isVisible, setHover, hover  }) => {
	const [isAffix, setIsAffix] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})
	const screens = useScreens()
	const [open, setOpen] = useState(false)
	const [openForm, setOpenForm] = useState(false)

	// const [hover, setHover] = useState(false)

	const handleMouseLeave = () => {
		setHover(false)
	}
	const handleMouseEnter = () => {
		setHover(true)
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
			case 'menu': setIsActiveForm(prev => ({ ...prev, tel: false, date: false, menu: true }))
				break
		}
	}

	// const showDrawerForm = (position, title, str) => {
	// 	setOpenForm(true)
	// 	setPlacement(position)
	// 	setTitle(title)
	// 	switch (str) {
	// 		case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
	// 			break
	// 		case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
	// 			break
	// 		case 'menu': setIsActiveForm(prev => ({ ...prev, tel: false, date: false, menu: true }))
	// 			break
	// 	}
	// }

	return (
		<div className=''>
			{
				screens.lg ?
					<Affix
						offsetTop={0}
						className='z-50 relative'
						onChange={(affixed) => setIsAffix(affixed)}
					>
						<div
							// className={isAffix ? 'absolute pt-4 pb-4 bg-[#5338FF] w-full' : `absolute pt-4 pb-4 bg-[#5338FF] shadow-xl w-full`}
							className={isAffix ? 'absolute pt-4 pb-4 bg-yellow-500 w-full' : `absolute pt-4 pb-4 bg-yellow-500 shadow-xl w-full`}
						>
							<div className='container mx-auto px-10'>
								<nav>
									<ul
										className='flex justify-between 
								items-center font-light
								text-white cursor-pointer
								 mb-0'
									>
										<li>
											<Link to='/'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Главная
											</Link>
										</li>
										<li>
											<Link to='#'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseEnter}
												style={{color:'#000'}}
											>
												Услуги
											</Link>
										</li>

										<li>
											<Link to='/aktsii-i-skidki'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Акции
											</Link>
										</li>
										<li>
											<Link to='/garantiya'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Гарантия
											</Link>
										</li>
										<li>
											<Link to='/otzyvy'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Отзывы
											</Link>
										</li>
										<li>
											<Link to='/o-nas'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												О нас
											</Link>
										</li>
										<li>
											<Link to='/dlya-klienta'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Статьи
											</Link>
										</li>
										<li>
											<Link to='/prodazha'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Продажа
											</Link>
										</li>
										<li>
											<Link to='/vykup-tehniki'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
												style={{color:'#000'}}
											>
												Выкуп
											</Link>
										</li>
										<li className='ml-32'>
										</li>
										<li>
											<Button
												type='primary'
												ghost
												style={{ background: '#000' }}
												onMouseEnter={handleMouseLeave}
												onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
												<ShakeOutlined /> Заказать звонок
											</Button>
										</li>
										<li>
											<Button
												type='primary'
												style={{ background: '#000' }}
												onMouseEnter={handleMouseLeave}
												ghost onClick={() => showDrawer('right', 'Заказать на дату', 'date')}>
												<CalendarOutlined /> Заказать на дату
											</Button>
										</li>
									</ul>
								</nav>
							</div>


							<AnimatePresence>
								{
									hover &&
									(<motion.div
										initial={{ heigth: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.5, delay: 0.1 }}
										className='w-full mt-2'
										style={{ borderTop: '1px solid #ccc', zIndex: '100000' }}
									>
										<div className='container mx-auto px-10'>
											<div className=' text-white pt-10 text-sm border-t-white h-auto flex justify-between items-start flex-wrap'>

												
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mb-7'>
													<li className='mb-1'>
														<Link to='/uslugi/remont-kholodilnikov'
															className="cursor-pointer"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт холодильников
														</Link>
													</li>
													<li className='mb-1'>
														<Link to='/uslugi/remont-morozilnikov'
															onClick={handleMouseLeave}
															className="cursor-pointer"
															style={{color:'#000'}}
														>
															Ремонт морозильников
														</Link>
													</li>
													<li className='mb-1'>
														<Link to='/uslugi/remont-ldogeneratorov'
															className="cursor-pointer"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт льдогенераторов
														</Link>
													</li>
												</ul>

												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mb-7'>
													<li className=''>
														<Link to='/uslugi/remont-konditsionerov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт кондиционеров
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-stiralnikh-mashin'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт стиральных машин
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-sushilnikh-mashin'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт сушильных машин
														</Link>
													</li>
												</ul>

												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mb-7'>
													<li className=''>
														<Link to='/uslugi/remont-posudomoechnikh-mashin'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт посудомоечных машин
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-varochnikh-panelei'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт варочных панелей
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-induktsionnikh-plit'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт индукционных плит
														</Link>
													</li>
												</ul>
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mb-7'>
													<li className=''>
														<Link to='/uslugi/remont-dukhovikh-shkafov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт душевых шкафов
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-televizorov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт телевизоров
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-robot-pilesosov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт робот пылесосов
														</Link>
													</li>
												</ul>

												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mb-7'>
													<li className=''>
														<Link to='/uslugi/remont-pilesosa'
															className="cursor-pointer"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт пылесосов
														</Link>
													</li>
												</ul>



												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start mt-11'>
													<li className=''>
														<Link to='/uslugi-premium/remont-holodilnikov-premium-brendov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт холодильников премиум брендов
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi-premium/remont-stiralnyh-mashin-premium-brendov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт стиральных машин премиум брендов
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi-premium/remont-posudomoechnyh-mashin-premium-brendov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт посудомоечных машин премиум брендов
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi-premium/remont-kofemashin-premium-brendov'
															className="cursor-pointer mb-1"
															onClick={handleMouseLeave}
															style={{color:'#000'}}
														>
															Ремонт кофемашин премиум брендов
														</Link>
													</li>
												</ul>



											</div>
										</div>
									</motion.div>)
								}
							</AnimatePresence>
						</div>

					</Affix>
					:
					<>
						<AnimatePresence>
							{!isVisible && (
								<Link to='/'>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={`pt-2 pb-2 px-5 bg-yellow-500 shadow-lg fixed top-0 left-0 right-0 z-10`}
									>
										{/* <div className='flex items-center text-white'>
											<div className='flex flex-col items-start '>
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
										</div> */}
										<div className='flex justify-start items-center'>
								{/* <Image src={logo} preview={false} width='80px' /> */}
								<div className='flex items-center mb-2'>
									
									<Image src={logo} alt='Логотип' preview='false' width={50} />
									<div className='ml-2'>
										<div className='uppercase px-2'>
											<p className='pb-0 mb-0 text-xl'>
												Ремонт
											</p>
										</div>
										<div className='bg-black/80 text-white px-2 py-1'>
											<p className='uppercase pb-0 mb-0 '>
												бытовой техники
											</p>
										</div>
									</div>
								</div>
							</div>
									</motion.div>
								</Link>
							)}
						</AnimatePresence>

						<div className='fixed top-2 right-2 p-3  z-50'>
							<MenuOutlined
								className={`${!isVisible ? 'text-black' : 'text-gray-700'} text-4xl`}
								onClick={() => showDrawer('right', 'Меню', 'menu')}
							/>
						</div>
					</>
			}
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
			<DrawerCompForms open={openForm} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div >
	)
}
