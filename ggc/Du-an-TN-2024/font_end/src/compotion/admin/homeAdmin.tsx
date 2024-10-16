import ContentDasbar from "./contentDasbar"
import FooterAdmin from "./footerAdmin"
import LefpBar from "./lefpBar"
import NavHeader from "./navHeader"

const HomeAdmin = () => {
  return (
    <div>
        <div id="wrapper">

        <LefpBar/>

<div id="content-wrapper" className="d-flex flex-column">

    <div id="content">

        <NavHeader/>

        <ContentDasbar/>

    </div>
    <FooterAdmin/>
</div>


</div>
</div>
  )
}

export default HomeAdmin