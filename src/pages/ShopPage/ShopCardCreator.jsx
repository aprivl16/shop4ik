import React, { useState } from 'react'
import { addShopItemToStore } from './shop.slice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'



const ShopCardCreator = () => {
   const dispath = useDispatch()

   const submitNewShopCard = (e) => {
      e.preventDefault()

      const { inputTitle, inputFile, inputPrice } = e.currentTarget
      const newShopItemData = {
         title: inputTitle.value,
         img: inputFile.files[0].name,
         price: inputPrice.value,
         id: nanoid()
      }

      dispath(addShopItemToStore(newShopItemData))

      e.currentTarget.reset()
      setFileLoading(inicialFileStatus)
   }

   const inicialFileStatus = {
      hasLoad: false,
      src: ''
   }

   const [fileLoading, setFileLoading] = useState(inicialFileStatus)

   return (
      <div className="shop-item add-new-shopCard">
         <h4 className='add-new-shopCard__title'>Add new shop card</h4>

         <form action="" className='add-new-shopCard__form' onSubmit={submitNewShopCard}>
            <input type="text" id='inputTitle' placeholder='Write a title for new card'
               maxLength={30}
               required
            />

            <input
               type="file"
               id='inputFile'
               accept="image/*"
               onChange={
                  (e) => {
                     const file = e.target.files[0];
                     file ? setFileLoading({
                        hasLoad: true,
                        src: file.name
                     }) : setFileLoading(prev => prev)
                  }

               }
               required />

            <label htmlFor="inputFile" className='input-file-label'>{
               fileLoading.hasLoad ?
                  <img src={fileLoading.src} style={{
                     maxHeight: "100%",
                     maxWidth: "100%",
                     borderRadius: "20px"
                  }} alt="" />
                  :
                  (
                     <div className="donwload-icon">
                        <div className="donwload-icon-arrow"></div>
                     </div>
                  )
            }
               <span className="download-hint">click to download an item img</span>
            </label>

            <input type="number" id='inputPrice' placeholder='Price' min={1} required />

            <button className='submit-form-btn'>Submit</button>
         </form>
      </div>
   )
}

export default ShopCardCreator