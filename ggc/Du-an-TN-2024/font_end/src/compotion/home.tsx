import Header from './header'
import Footer from './footer'
import Banner from './baner'
import Menu from './menu'
// import BanerBody from './banerBody'
// import TopFooter from './topFooter'
import '/src/assets/css/style.css'
import TopFooter from './topFooter'
import OneListProduct from './oneListProduct'
import BanerBody from './banerBody'
import TwoListProduct from './twoListProduct'





const Home = () => {

  return (
    <>
       
        <Banner/>
        <Menu/>
        <OneListProduct />
        <BanerBody/>
        <TwoListProduct/>
        <TopFooter/>
        
    </>
  )
}

export default Home