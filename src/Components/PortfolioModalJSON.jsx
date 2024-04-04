import React from 'react';
import { useState } from 'react';
import portJSON from './json/food.json'



function PortfolioModalJSON() {


    // Declare a fixed length excerpt
    var fixedLengthExcerpt;
    // Function shorter() to short down a long description and generate an excerpt
    // the length can be set by editing "arrayPh.length = x"
    const shorter = (phrase) =>{
      let arrayPh = phrase.split(' ');
      arrayPh.length = 12;
      fixedLengthExcerpt = arrayPh.join(' ');
      return fixedLengthExcerpt
    }

    // Run shorter() and add an excerpt to each object of local portfolio json
    for(let i=0;i<portJSON.length;i++){
        shorter(portJSON[i].description)
        portJSON[i].fixedLengthExcerpt = fixedLengthExcerpt
    }

    // Empty array to get the categories
    const categoryArray = [];
    // Loop on portfolio and push the category into the array
    portJSON.forEach(element => {
        categoryArray.push(element.category)
    });
    // Declare an array with the first elemnt "all"
    const uniqueFilters = ['All']
    // Function to eliminate double category from the array
    function eliminateDuplicates(arr) {
        const arrayClone = [...arr];

        let supportObject = {};

        for (let i = 0; i < arrayClone.length; i++) {
          supportObject[arrayClone[i]] = 0;
        }
        for (let i in supportObject) {
          uniqueFilters.push(i);
        }

        return uniqueFilters;

    }
    // Run the eliminateDuplicates function on the array of categories
    eliminateDuplicates(categoryArray)


    // Function to filter the portfolio blocks
    function filterSelection(whatClicked){


        // array of all css props of portfolios block
        let allBlocks = document.getElementsByClassName('port_block')

        // array of all css props of filters
        let allFilters = document.getElementsByClassName('btnFilters')

        // Loop through all filters
        for(let i =0; i<allFilters.length;i++){

            // Array of the css props of single filter block
            let arrayOfPropsFilter = allFilters[i].classList.value.split(' ')
            console.log(arrayOfPropsFilter)
            // Function to test if element is equal to whatClicked
            const isPresent = (element) => element == whatClicked;
                // If .some() returns false set inactive
                if(arrayOfPropsFilter.some(isPresent) == false){
                    allFilters[i].classList.add('inactive')
                    allFilters[i].classList.remove('active')
                }
                // Otherwise set active the block whose cat is equal to whatclicked
                else{

                    allFilters[i].classList.add('active')
                  }
          }


        // Loop through all blocks
        for(let i =0; i<allBlocks.length;i++){
            // Array of the css props of single portfolio block
            let arrayOfPropsBlock = allBlocks[i].classList.value.split(' ')

            // Function to test if element is equal to whatClicked
            const isPresent = (element) => element == whatClicked;
                // If .some() returns false hide the blocks
                if(arrayOfPropsBlock.some(isPresent) == false && whatClicked != "All"){
                    allBlocks[i].classList.remove('visible')
                    allBlocks[i].classList.add('hidden')
                }
                // Otherwise shows the block whose cat is equal to whatclicked
                else{
                      allBlocks[i].classList.remove('hidden')
                      allBlocks[i].classList.add('visible')
                  }
          }

    }

    // useState Hook to check what id from modals
    const [isCLicked, setID] = useState([]);


    // Function to show the modal
    const openModal = (whatClicked)=>{
        setID(whatClicked);
       document.getElementById(whatClicked).classList.add('d-block');
      }
    // Function to hide the modal
      const closeModal = (whatClicked)=>{
        setID(whatClicked);
        document.getElementById(whatClicked).classList.remove('d-block');
      }


    return (
    <>
    <section id="portfolio" className="pb-5">
           <div>
            <div className="container gray-bg p-2">
                {/******* PORTFOLIO FILTERS *********/}
                <div className='container d-flex justify-content-center pt-1 mb-5'>
                    <div className="mx-auto">
                    {uniqueFilters.map((e)=>{
                    return(
                        <button id={e} key={e} onClick={()=>filterSelection(e)} type="button" className={"btn btn-outline-success mx-2 btnFilters mb-2 " + e}>{e}</button>
                        )})}
                    </div>
                </div>
                {/******* END PORTFOLIO FILTERS *********/}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {portJSON.map((e,i)=>{
                    return(

                    <div key={e.title} className={"col" + " " + e.category + " " + "port_block"}>
                        <div className="card shadow-sm">
                            <img src={e.image}/>
                            <div className="card-body">
                                <p className="card-text">{e.fixedLengthExcerpt}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button className="btn btn-outline-success p-1" onClick={()=>openModal(i)}>
                                            <i className="fs-6 fa fa-search"></i> See All
                                        </button>
                                    </div>
                                    <small className="text-primary fs-6">{e.category}</small>
                                </div>
                            </div>
                        </div>
                        {/************ MODAL STARTS HERE *********/}
                        <div id={i} className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog">
                                <div className="modal-dialog modal-xl bg-dark" role="document">
                                    <div className="modal-content rounded-4 shadow bg-ligth" >
                                        <div className="modal-header d-flex justify-content-center">

                                        <h1 className="display-3 modal-title text-center">{e.title}</h1>

                                        </div>
                                        <div className="modal-body py-3 text-center">
                                            <img src={e.image} className='img-fluid'></img>
                                            <h5 className="mt-3 fw-bold text-">CATEGORY: {e.category}</h5>
                                            <h5 className="mt-3 fw-bold text-">PRICE: {e.price}</h5>
                                            <h3 className="mt-3 fw-bold">{e.description}</h3>


                                        </div>

                                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                                        <div className="modal-footer">
                                            <button type="button" onClick={()=>closeModal(i)} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                                            <i className='fa fa-times px-2 fs-4'></i>Close
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        {/************ END MODAL ***********/}
                    </div>
                    )})}
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default PortfolioModalJSON