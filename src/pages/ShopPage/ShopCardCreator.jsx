import React, { useState } from 'react'
import { url } from '../../data'
import { addToTheShop } from './shop.slice' 
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const ShopCardCreator = () => {
   const dispatch = useDispatch()

   const submitNewShopCard = (e) => {
      e.preventDefault()
      
      const { inputTitle, inputFile, inputPrice } = e.currentTarget
      fetchNewShopItem({ inputTitle, inputFile, inputPrice })

      e.currentTarget.reset()
      setFileLoading(inicialFileStatus)
   }

   const fetchNewShopItem = async (props) => {
      
      const { inputTitle, inputFile, inputPrice } = props
      const shopItemObj = {
         "title": inputTitle.value,
         "img": inputFile.files[0].name,
         "price": inputPrice.value,
         "id": nanoid() 
      }
      const request = await fetch(url, {
         method: "POST",
         body: JSON.stringify(shopItemObj),
         headers: {
            "Content-Type": "application/json",
         }
      })
      dispatch(addToTheShop(shopItemObj))
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