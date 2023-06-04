import React, { useState } from 'react'
import { useScreens } from '../../../constants/Constants'
import { Affix, Button, Image } from 'antd'
import { motion, AnimatePresence } from "framer-motion"
import { ShakeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import logo from '../../../images/logo/1.svg'
import logo2 from '../../../images/logo/fridge.svg'
import logo3 from '../../../images/logo/washing-machine.svg'
import { Link } from 'react-router-dom'

import { Link as LinkScroll } from 'react-scroll'
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

	const showDrawerForm = (position, title, str) => {
		setOpenForm(true)
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
							className={isAffix ? 'absolute pt-4 pb-4 bg-[#5338FF] w-full' : `absolute pt-4 pb-4 bg-[#5338FF] shadow-xl w-full`}
						>
							<div className='container mx-auto px-10'>
								<nav>
									<ul
										className='flex justify-between 
								items-center text-lg font-light
								text-white cursor-pointer
								 mb-0'
									>
										<li>
											<Link to='/'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer text-white"
												onMouseEnter={handleMouseLeave}
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
											>
												О нас
											</Link>
										</li>
										<li className='ml-48'>
										</li>
										<li>
											<Button
												type='primary'
												ghost
												style={{ background: '#fff' }}
												onMouseEnter={handleMouseLeave}
												onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
												<ShakeOutlined /> Заказать звонок
											</Button>
										</li>
										<li>
											<Button
												type='primary'
												style={{ background: '#fff' }}
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
											<div className=' text-white pt-10 text-sm border-t-white h-[15vh] font-light flex justify-between items-start flex-wrap'>
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
													<li className=''>
														<Link to='/uslugi/remont-kholodilnikov'
															className="cursor-pointe"
															onClick={handleMouseLeave}
														>
															Ремонт холодильников
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-morozilnikov'
															onClick={handleMouseLeave}
															className="cursor-pointer"
														>
															Ремонт морозильников
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-ldogeneratorov'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Ремонт льдогенераторов
														</Link>
													</li>
												</ul>
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
													<li className=''>
														<Link to='/uslugi/remont-konditsionerov'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Ремонт кондиционеров
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-stiralnikh-mashin'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Ремонт стиральных машин
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-sushilnikh-mashin'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт сушильных машин
														</Link>
													</li>
												</ul>
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
													<li className=''>
														<Link to='/uslugi/remont-posudomoechnikh-mashin'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт посудомоечных машин
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-varochnikh-panelei'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт варочных панелей
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-induktsionnikh-plit'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт индукционных плит
														</Link>
													</li>
												</ul>
												<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
													<li className=''>
														<Link to='/uslugi/remont-dukhovikh-shkafov'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт душевых шкафов
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-televizorov'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт телевизоров
														</Link>
													</li>
													<li className=''>
														<Link to='/uslugi/remont-robot-pilesosov'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт робот пылесосов
														</Link>
													</li>
												</ul>
												<ul className='h-full text-sm cursor-pointer flex justify-between items-start'>
													<li className=''>
														<Link to='/uslugi/remont-pilesosa'
															className="cursor-pointer"
															onMouseEnter={handleMouseLeave}
														>
															Ремонт пылесосов
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
										className={`pt-2 pb-2 px-5 bg-[#5338FF] shadow-lg fixed top-0 left-0 right-0 z-10`}
									>
										<div className='flex items-center text-white'>
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
										</div>
									</motion.div>
								</Link>
							)}
						</AnimatePresence>

						<div className='fixed top-2 right-2 p-3  z-50'>
							<MenuOutlined
								className={`${!isVisible ? 'text-white' : 'text-gray-700'} text-4xl`}
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
