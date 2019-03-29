import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'


// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

const pagination = (props)=>{
	return(
  // <div>
	// 	<Pagination>
	// 	{/* <Pagination.Prev /> */}
	// 	{items}
	// 	{/* <Pagination.Next /> */}
	// 	</Pagination>
	// </div>
	<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
	)
}
export default pagination;