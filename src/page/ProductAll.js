
import React, { useEffect, useState } from 'react';
import ProductCard from '../compnent/ProductCard';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        /* let url = 'http://localhost:5000/products/' */
        //getProduct함수를 통해서 API를 호출할 때에 쿼리에 있는 값을 넣어줌.
        let searchQuery=query.get('q')||"";
        //
        let url = `http://localhost:5000/products?q=${searchQuery}`

        /* my-json-serve에서 자료를 가져오기 */
        /* let url = ` https://my-json-server.typicode.com/ryuyeonsuk/yoomarket`  */
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        setProductList(data)/* 여기까지 작성해야 디비제이슨 자료를 끌고 올수 있다. */
        /* useState([]) 부문만 바꿔주는 속성, (콜백함수랑 같이쓴다) useEffect(() => {getProducts()}, [])통으로 한번에 뿌려주는 역할 */
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
      <Container>
        <Row>
          {
              productList.map((menu, idx) => (
                  <Col lg={3} key={idx}>
                      <ProductCard item={menu} />
                  </Col>
              ))
          }
        </Row>
      </Container>
    )
}

export default ProductAll