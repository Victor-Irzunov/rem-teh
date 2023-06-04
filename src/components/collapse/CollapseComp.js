import React, { useEffect, useRef, useState } from 'react'
import { Collapse } from 'antd'
import { useScreens } from '../../constants/Constants'
import { data } from '../../constants/voprosOtvet/dataVoprosOtvet'

const { Panel } = Collapse

const CollapseComp = () => {
	const screens = useScreens()
	const collapseRef = useRef(null)
	const [activeKey, setActiveKey] = useState(['1', '2', '3', '4'])

	useEffect(() => {
		const handleScroll = () => {
			const rect = collapseRef.current.getBoundingClientRect()
			const offset = 450 // Значение поправки, можно настроить по своему усмотрению
			if (rect.top <= offset && rect.bottom >= offset) {
				setActiveKey([]) // Изменяем состояние activeKey на пустой массив, чтобы закрыть все панели
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Collapse ghost activeKey={activeKey} onChange={setActiveKey} ref={collapseRef}>
			{data.map(el => (
				<Panel header={<span className="">{el.title}</span>} key={el.id}>
					<div className={`${screens.xs ? 'pl-2' : 'pl-6'}`}>
						<span className="">{el.text}</span>
					</div>
				</Panel>
			))}
		</Collapse>
	)
}

export default CollapseComp
