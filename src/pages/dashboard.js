import React from 'react';

function DashBoard() {
  return (
    <>
    <div class="container bootstrap snippet" style={{paddingTop : "30px"}}>
      <div class="row justify-content-center">
        <div class="col-lg-2 col-sm-6">
          <div class="circle-tile ">
            <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
            <div class="circle-tile-content dark-blue">
              <div class="circle-tile-description text-faded"> Users</div>
              <div class="circle-tile-number text-faded ">265</div>
              <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-2 col-sm-6">
          <div class="circle-tile ">
            <a href="#"><div class="circle-tile-heading green"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
            <div class="circle-tile-content green">
              <div class="circle-tile-description text-faded"> Users Online </div>
              <div class="circle-tile-number text-faded ">10</div>
              <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
            </div>
          </div>
        </div> 

        <div class="col-lg-2 col-sm-6">
          <div class="circle-tile ">
            <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
            <div class="circle-tile-content dark-blue">
              <div class="circle-tile-description text-faded"> Users</div>
              <div class="circle-tile-number text-faded ">265</div>
              <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-sm-6">
          <div class="circle-tile ">
            <a href="#"><div class="circle-tile-heading green"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
            <div class="circle-tile-content green">
              <div class="circle-tile-description text-faded"> Users Online </div>
              <div class="circle-tile-number text-faded ">10</div>
              <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
            </div>
          </div>
        </div> 

        <div class="col-lg-2 col-sm-6">
          <div class="circle-tile ">
            <a href="#"><div class="circle-tile-heading green"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
            <div class="circle-tile-content green">
              <div class="circle-tile-description text-faded"> Users Online </div>
              <div class="circle-tile-number text-faded ">10</div>
              <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
            </div>
          </div>
        </div> 
        
        
      </div> 
    </div>  
    </>
  )
}

export default DashBoard;