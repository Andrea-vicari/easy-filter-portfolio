import React from 'react'
import PortfolioModalAPI from './PortfolioModalAPI'

function BootstrapModalAPI() {
  return (
    <>
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Modal Pop-up  API Version</h1>
                <p className="lead text-body-secondary">
                    A filter portfolio component that fetches datas from a API file, get the categories from the Json and automatically generates the filter buttons
                </p>

            </div>
            <PortfolioModalAPI />
        </div>
    </section>
    </>
  )
}

export default BootstrapModalAPI