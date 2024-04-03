import React from 'react'
import PortfolioModal from './PortfolioModal'

function BootstrapModal() {
  return (
    <>
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Modal Pop-up Version</h1>
                <p className="lead text-body-secondary">
                    A filter portfolio component that fetches datas from a JSON file or from an API, and automatically generates the filter buttons
                </p>

            </div>
            <PortfolioModal />
        </div>
    </section>
    </>
  )
}

export default BootstrapModal