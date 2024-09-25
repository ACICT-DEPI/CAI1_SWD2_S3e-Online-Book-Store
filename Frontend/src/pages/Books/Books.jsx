import React from 'react'
import BookShow from '../../components/book/BookShow'
import { BsTypeH3 } from 'react-icons/bs'

export default function BooksPage() {
  return (
    <div className='flex w-3/4 min-h-screen mx-auto bg-slate-100 py-20 items-center '>

    

    <div className='flex flex-wrap gap-1'>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    <BookShow/>
    </div>
    

    </div>
  )
}
