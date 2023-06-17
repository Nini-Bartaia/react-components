import React from 'react'
import Card from './card'
import lordofrings from '../assets/61215351.jpg'
import Mockingbird from '../assets/images (1).jpg'
import bookthief from '../assets/images (2).jpg'
import lastbook from '../assets/images.jpg'

const cardList = () => {

    function action(name, character){
        console.log(`this is title and character of the book: ${name}, ${character}`)
    }
  return (
    <div className='cardsDiv'>
        <Card name="The Lord of the Rings" description="The Lord of the Rings is an epic fantasy novel written by John Ronald Reuel Tolkien, a British writer and professor at Oxford University. " image={lordofrings} action={action}  character="Gandalf"/>
      <Card name="To Kill a Mockingbird" description="Don't Kill Jafar is a novel by American author Harper Lee, published on July 11, 1960. It brought great success to the author, received the Pulitzer Prize and became a classic of modern American literature " image={Mockingbird} action={action}  character=" Jean Louise 'Scout' Finch"  />
      <Card name="1984" description="One thousand nine hundred and eighty-four is a dystopian novel by George Orwell. Released in 1949. The novel describes the existence and mechanisms of the totalitarian regime." image={lastbook} action={action}   character=" Winston Smith" />
      <Card name="The Book Thief" description="The Book Thief is a historical fiction novel by the Australian author Markus Zusak, set in Nazi Germany during World War II.  " image={bookthief} action={action}  character=" Liesel Memminger" />

     
    </div>

    
  )
}

export default cardList