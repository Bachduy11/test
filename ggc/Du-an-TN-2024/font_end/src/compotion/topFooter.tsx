import '/src/assets/css/style.css'

const TopFooter = () => {
  return (
    <>
        <main>
      <div className="container mb-5">
        <div className="tile mb-5 ">
          <button className="btn btn-danger"></button> <a className="btn text-danger fw-medium" href="">Featured</a>
          <div className="row">
            <div className="col-10">
              <h3 className="mt-3 ">New Arrival</h3>
            </div>
            {/* <div className="col-2 mb-4 "><a className="btn btn-danger py-3 px-5  " href="">View All</a></div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="src/images/Frame 684.png" alt=""/>
          </div>
          <div className="col-6">
            <img src="src/images/Frame 738.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 mb-5 ">
        <img src="src/images/Frame 702.png" alt=""/>
      </div>
    </main>
    </>
  )
}

export default TopFooter