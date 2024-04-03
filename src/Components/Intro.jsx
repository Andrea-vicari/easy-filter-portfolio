import React from 'react'
import placeHolder from '../assets/images/port_web_mongo.jpg'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <>
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Easy Portfolio Component</h1>
            <p className="lead text-body-secondary">
                A filter portfolio component that fetches datas from a JSON file or from an API, and automatically generates the filter buttons
            </p>
            <i className='fa fa-arrow-down fs-1'></i>
            <p className="lead text-body-secondary pt-3">
                Choose the demo
            </p>

        </div>
        <h2 className='text-center pt-5'>Bootstrap5 Version</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Modal Pop-up Version</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/bootstrapmodalpage" className="btn btn-warning">Go somewhere</Link>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                <h5 className="card-title">Hover Effect Version</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>

        </div>
        <h2 className='text-center pt-5'>FlexBox Version</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={placeHolder}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>

        </div>
        </div>
    </section>
    </>
  )
}

export default Intro