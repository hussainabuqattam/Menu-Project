import Container from 'react-bootstrap/Container';
import {Cards} from './Cards';
import { Titlle } from './Titlle';
import { Category } from './Category';
import {ArraysData} from '../Data/ArrayFile'
import { useState } from 'react';
import { Navbars } from './Navbars';


function ContainerExample() {
  const [Data,setData] = useState(ArraysData)
  const allcategory = ['الكل', ...new Set(ArraysData.map((i) => i.title))]
  console.log(allcategory)
  // Filter by button
  const filterbycategory = (cat) => {
     if(cat === 'الكل'){
      setData(ArraysData)
     } else {
      const newdata = ArraysData.filter((item) => item.title === cat)
      setData(newdata)
     }
  }
  // Filter by search
const filterbysearch = (text) => {
  if(text !== ''){
   const searchfilter = ArraysData.filter((item) => item.title === text)
   setData(searchfilter)
  }
}
  return (
    <>
    <Navbars filterbysearch={filterbysearch}/>
    <Container>
      <Titlle/>
      <Category filterbycategory={filterbycategory} allcategory={allcategory} />
      <Cards data={Data}/>
    </Container>
    </>
  );
}

export default ContainerExample;