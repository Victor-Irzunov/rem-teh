import { Divider, Space, Tag } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { dataMenu } from '../../../constants/menuMobilPremium/dataMenu'

export const MenuMobilPremium = ({onClose}) => {
	return (
		<div className='pt-2'>
			<nav>
				<ul className='h-full flex flex-col justify-between items-start text-sm'>
					{
						dataMenu && dataMenu.map(el => {
							return (
								<React.Fragment key={el.id}>
									<li className=''>
										<Link to={el.link}
											className="cursor-pointer uppercase font-semibold"
											style={{ color: '#000' }}
											onClick={onClose}
										>
											{el.title}
											<div className='mt-3 font-light lowercase'>
												<Space size={[0, 8]} wrap>
													{
														el.children.map(elem => {
															return (
																<Tag key={elem.id} color={elem.color} style={{ textTransform: 'capitalize' }}>
																	{elem.item}
																</Tag>
															)
														})
													}
												</Space>
											</div>
										</Link>
									</li>
									<Divider />
								</React.Fragment>
							)
						})
					}
				</ul>
			</nav>
		</div>
	)
}
