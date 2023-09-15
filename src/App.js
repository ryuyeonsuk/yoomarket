import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from  'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';

import NavMenu from './compnent/NavMenu';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';





//1.전체상품 페이지/로그인/상품상세페이지 - src 폴더에 페이지 폴더 생성해서 작업할 페이지 생성
//1-1 네비게이션바 나는 네브메뉴-컴포넌트
//2.전체상품페이지에서는 기본 상품이 진열됨
//npm install -g json-server 설치
//새터미널을 열어서 json-server --watch db.json --port 5000  (포트번호는 3000번만 피해서 하면됨.)
//서버연결이 되면 리소스 정보를 ctrl누르고 클릭해서 data정보 먼저 확인
/* Resources
   http://localhost:5000/products */

//3. 로그인 버튼을 클릭하면 로그인 페이지 나옴

//3. 상품을 클릭했을 때 로그인 상태면 ->상세페이지가 보이고 로그인 상태가 아니면 -> 로그인 페이지가 보이도록 함.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  /* 
   useEffect( () => {})
   -인자로 함수를 받음 -> 콜백함수
   -Mount --->화면에 첫 렌더링
   -Update --> 다시 렌더링
   -UnMount --> 화면에서 사라짐

   1) useEffect( () => {},[])
   -> 화면에 처음 렌더링될 때 실행 -> 빈배열값을 전달하면 화면에 첫 렌더링할 때만 실행

   2) useEffect( () => {},[value])
   ---> value의 값을 바뀔 때마다 실행
  */
  useEffect(()=> {
    console.log(authenticate);
  },[authenticate])/*authenticate값을 PrivateRoute에 전달한다  */
  return (
    <Container>
      <NavMenu authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path= '/' element={<ProductAll/>}/>
        {/* <Route path= '/product/:id' element={<ProductDetail/>}/> */}
        
        {/* privateRoute 로그인 되었을때 보여지는 화면 */}
        {/* privateRoute 설정 */}
        <Route path= '/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
        <Route path= '/login' element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
        {/* <Route path= '/user' element={<UserPage/>}/> */}
      </Routes>
      
    </Container>
  );
}

export default App;
