import React from 'react';
import Pagination from 'react-bootstrap/Pagination';



// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

const DisplayPagination = (props)=>{
	return(
 
	<Pagination>
  {/* <Pagination.First /> */}
  <Pagination.Prev />
   {/* <Pagination.Ellipsis /> */}
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item active>{2}</Pagination.Item>
  <Pagination.Item >{3}</Pagination.Item>
  {/* <Pagination.Item disabled>{14}</Pagination.Item> */} 
  <Pagination.Next />
  {/* <Pagination.Last /> */}
</Pagination>
	)
}
export default DisplayPagination;