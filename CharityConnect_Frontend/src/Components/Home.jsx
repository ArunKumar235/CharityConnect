import homeImage from '../assets/images/home.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Do something incredible today</h1>
                <p className="lead">Online fundraising for the people and charities you love</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <Link to='/charities'><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" >Donate Now</button></Link>
                <Link to='/about'><button type="button" className="btn btn-outline-secondary btn-lg px-4" >About Us</button></Link>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3 home-img" src={homeImage} alt="" width="540px" />
            </div>
            </div>

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom text-center ">Charities in need to immediate helping hands</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    {/* <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"> */}
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
                    {/* </div> */}
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                    {/* <svg className="bi"><use xlink:href="#chevron-right"></use></svg> */}
                    </a>
                </div>
                <div className="feature col">
                    {/* <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"> */}
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
                    {/* </div> */}
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                    {/* <svg className="bi"><use xlink:href="#chevron-right"></use></svg> */}
                    </a>
                </div>
                <div className="feature col">
                    {/* <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"> */}
                    {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
                    {/* </div> */}
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                    Call to action
                    {/* <svg className="bi"><use xlink:href="#chevron-right"></use></svg> */}
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Home;