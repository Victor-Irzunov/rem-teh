import React, { useState } from 'react'
import { Button, Divider, Image } from 'antd'
import { FormOutlined, RightOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import { Link } from 'react-router-dom'
import premium from '../../../images/premium.webp'
import { DrawerComp2 } from '../../drawer/DrawerComp2'

export const MenuMobil = ({onclose}) => {
	const [open, setOpen] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})
	const onClose = () => {
		onclose()
	}
	const onCloseAll = () => {
		setOpen2(false)
		onclose()
	}

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false, menu2: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false, menu2: false }))
				break
		}
	}
	return (
		<div className='h-screen'>
			<nav className='h-full overflow-y-scroll'>
				<ul className='h-full flex flex-col justify-between items-start text-sm cursor-pointer'>
					<li>
						<Link to='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />

					<li
						className='flex justify-between items-center w-full cursor-pointer'
						onClick={() => {
							setOpen2(true)
						}}
					>
						<div className=''>
							Ремонт{' '}<span className='font-semibold relative text-amber-600'>премиум техники
								<Image
									src={premium}
									preview={false}
									width={20}
									className='absolute bottom-0 right-0'
								/>
							</span>
						</div>
						<RightOutlined
							className='text-amber-600'
						/>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-kholodilnikov'

							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>холодильников</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-stiralnikh-mashin'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>стиральных машин</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-posudomoechnikh-mashin'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>посудомоечных машин</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-morozilnikov'

							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>морозильников</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-ldogeneratorov'
							className="cursor-pointe"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>льдогенераторов</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />

					<li>
						<Link to='/uslugi/remont-konditsionerov'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>кондиционеров</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />

					<li>
						<Link to='/uslugi/remont-sushilnikh-mashin'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>сушильных машин</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />

					<li>
						<Link to='/uslugi/remont-varochnikh-panelei'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>варочных панелей</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-induktsionnikh-plit'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>индукционных плит</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-dukhovikh-shkafov'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>духовых шкафов</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-televizorov'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>телевизоров</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-robot-pilesosov'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>робот-пылесосов</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/uslugi/remont-pilesosa'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт <span className='font-semibold'>пылесосов</span>
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/aktsii-i-skidki'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Акции и скидки
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/prodazha'
							className="cursor-pointer font-bold"
							onClick={onClose}
							style={{ color: '#65a30d' }}
						>
							Продажа техники б/у
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/vykup-tehniki'
							className="cursor-pointer font-bold"
							onClick={onClose}
							style={{ color: '#65a30d' }}
						>
							Выкуп неисправной техники
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/garantiya'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Гарантия
						</Link>
					</li>
					
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/dlya-klienta'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Для клиента
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/otzyvy'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Отзывы
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					<li>
						<Link to='/o-nas'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							О нас
						</Link>
					</li>
					<Divider style={{ marginTop: '4px', marginBottom: '4px' }} />
					

					<li className='mb-3'>
						<Button
							type='text'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
							style={{ paddingLeft: '0px' }}
						>
							<FormOutlined /> Записаться на дату
						</Button>
					</li>
				</ul>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
			<DrawerComp2 open2={open2} setOpen2={setOpen2} onCloseAll={onCloseAll} />
		</div>
	)
}
