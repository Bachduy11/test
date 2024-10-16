import Footer from "./footer"
import Header from "./header"

const NotFound = () => {
  return (
    <>
    
    <div className="container my-5">
        <div className="row justify-content-center align-items-center text-center vh-100">
            <div className="col-12 notFound">
                <h1 className="my-5">404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <a className="btn btn-danger my-5 " href="/">Back to home page</a>
            </div>
        </div>
    </div> 
    </>
  )
}

export default NotFound