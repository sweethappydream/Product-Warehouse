import { useState } from 'react'

export default function Sticky({ listData, onClickList }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const drawMenu = (menuIsOpen, listData) => {
    if (menuIsOpen) {
      return (
        <div className="relative">
          <div className="absolute top-[16px] right-[-4px] w-[120px] h-fit bg-card rounded-md menu-drop p-1">
            {
              listData.map((item) => (
                <p key={item.id} onClick={clickListHandle(item.id)} className="p-1 text-white text-center text-base hover:bg-mainBack rounded-sm cursor-pointer">{item.name}</p>
              ))
            }
          </div>
        </div>
      )
    }
  }
  const clickListHandle = (id) => () => {
    setMenuIsOpen(!menuIsOpen)
    onClickList(id)
  }
  return (
    <div className="fixed top-16 right-4 w-[30px] h-[30px] bg-card rounded-lg p-[4px] flex justify-center items-center">
      <img src="/img/list.svg" className="w-[22px]" onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {drawMenu(menuIsOpen, listData)}
    </div>
  )
}