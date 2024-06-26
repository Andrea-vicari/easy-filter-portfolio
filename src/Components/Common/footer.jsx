import React from 'react'

function footer() {
  return (
    <>
        <div className='container-fluid bg-success'>
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                  <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <span className="mb-3 mb-md-0 text-white">© 2024 Easy Filter Portfolio</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className='fab fa-github'></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className='fab fa-github'></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className='fab fa-github'></i></a></li>
              </ul>
              </footer>
          </div>
    </div>
    </>
  )
}

export default footer