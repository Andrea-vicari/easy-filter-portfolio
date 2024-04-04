import React from 'react'
// import PortfolioModalJSON from './PortfolioModalJSON'
import PortfolioModalJSONImage from './PortfolioModalJSONImage'

function BootstrapModal() {
  return (
    <>
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Modal Pop-up  JSON Version</h1>
                <p className="lead text-body-secondary">
                    A filter portfolio component that fetches datas from a JSON, get the categories from the Json and automatically generates the filter buttons
                </p>

            </div>
            <PortfolioModalJSONImage />
        </div>
    </section>
    </>
  )
}

export default BootstrapModal