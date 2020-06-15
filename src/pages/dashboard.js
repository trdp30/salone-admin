import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findDashboardCount } from '../store/actions/dashboard.action.';
import Loading from '../components/loading';


function DashBoard(props) {

  useEffect(() => {
    if(!props.countModel.request.isLoading && !props.countModel.request.error) {
      props.getDashboardCount()
    }
  }, [])


  return (
    <>
      {!props.countModel.request.isLoading  ? 
        (
          <div class="container bootstrap snippet" style={{paddingTop : "30px"}}>
            <div class="row justify-content-center">
              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-calendar fa-fw fa-2x"></i></div></a>
                  <div class="circle-tile-content dark-blue">
                    <div class="circle-tile-description text-white">Todays Appointment</div>
                    <div class="circle-tile-number text-white ">{props.countModel.data.todays_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading green"><i class="fa fa-calendar-minus-o fa-fw fa-2x"></i></div></a>
                  <div class="circle-tile-content green">
                    <div class="circle-tile-description text-white"> Pending Appointment</div>
                    <div class="circle-tile-number" style={{color: '#065a91'}}>{props.countModel.data.pending_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div> 

              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-calendar-times-o fa-fw fa-2x"></i></div></a>
                  <div class="circle-tile-content dark-blue">
                    <div class="circle-tile-description text-white"> Cancelled Appointment</div>
                    <div class="circle-tile-number text-red ">{props.countModel.data.cancelled_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading green"><i class="fa fa-calendar-check-o fa-fw fa-2x"></i></div></a>
                  <div class="circle-tile-content green">
                    <div class="circle-tile-description text-white"> Confirmed Appointment </div>
                    <div class="circle-tile-number" style={{color: '#f4ef07'}}>{props.countModel.data.confirmed_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div> 

              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-spinner fa-pulse fa-fw fa-2x"></i></div></a>
                  <div class="circle-tile-content dark-blue">
                    <div class="circle-tile-description text-white">Appointment In Progress</div>
                    <div class="circle-tile-number" style={{color: 'rgb(246, 128, 59)'}}>{props.countModel.data.in_progress_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div> 

              <div class="col-lg-2 col-sm-6">
                <div class="circle-tile ">
                  <a href="#"><div class="circle-tile-heading green"><i class="fa fa-smile-o fa-fw fa-3x"></i></div></a>
                  <div class="circle-tile-content green">
                    <div class="circle-tile-description text-white">Appointment Complete</div>
                    <div class="circle-tile-number" style={{color: '#02fa02'}}>{props.countModel.data.completed_count}</div>
                    <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
        ):
        <Loading/> 
      }
    </>
  )
}


const mapStateToProps = state =>{
  return {
    countModel: state.counts
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getDashboardCount: dispatch(findDashboardCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);