import React, { useEffect, useRef, useState } from 'react'
import { Collapse } from 'antd'
import { useScreens } from '../../constants/Constants'
import { data } from '../../constants/voprosOtvet/dataVoprosOtvet'

const { Panel } = Collapse

const CollapseComp = () => {
  const screens = useScreens()
  const [activeKey, setActiveKey] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
  const collapseRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = collapseRef.current.getBoundingClientRect()
      if (top <= window.innerHeight && bottom >= 0) {
        setActiveKey([])
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='' ref={collapseRef}>
      <Collapse ghost activeKey={activeKey} onChange={setActiveKey}>
        {data.map(el => (
          <Panel header={<span className="">{el.title}</span>} key={el.id}>
            <div className={`${screens.xs ? 'pl-2' : 'pl-6'}`}>
              <span className="">{el.text}</span>
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default CollapseComp
