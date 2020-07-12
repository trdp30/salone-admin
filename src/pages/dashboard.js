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
					<div className="container bootstrap snippet" style={{paddingTop : "30px"}}>
						<div className="row justify-content-center">
							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading dark-blue"><i className="fa fa-calendar fa-fw fa-2x"></i></div></a>
									<div className="circle-tile-content dark-blue">
										<div className="circle-tile-description text-white">Todays Appointment</div>
										<div className="circle-tile-number text-white ">{props.countModel.data.todays_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
									</div>
								</div>
							</div>
              
							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading green"><i className="fa fa-calendar-minus-o fa-fw fa-2x"></i></div></a>
									<div className="circle-tile-content green">
										<div className="circle-tile-description text-white"> Pending Appointment</div>
										<div className="circle-tile-number" style={{color: '#065a91'}}>{props.countModel.data.pending_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
									</div>
								</div>
							</div> 

							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading dark-blue"><i className="fa fa-calendar-times-o fa-fw fa-2x"></i></div></a>
									<div className="circle-tile-content dark-blue">
										<div className="circle-tile-description text-white"> Cancelled Appointment</div>
										<div className="circle-tile-number text-red ">{props.countModel.data.cancelled_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
									</div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading green"><i className="fa fa-calendar-check-o fa-fw fa-2x"></i></div></a>
									<div className="circle-tile-content green">
										<div className="circle-tile-description text-white"> Confirmed Appointment </div>
										<div className="circle-tile-number" style={{color: '#f4ef07'}}>{props.countModel.data.confirmed_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
									</div>
								</div>
							</div> 

							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading dark-blue"><i className="fa fa-spinner fa-pulse fa-fw fa-2x"></i></div></a>
									<div className="circle-tile-content dark-blue">
										<div className="circle-tile-description text-white">Appointment In Progress</div>
										<div className="circle-tile-number" style={{color: 'rgb(246, 128, 59)'}}>{props.countModel.data.in_progress_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
									</div>
								</div>
							</div> 

							<div className="col-lg-2 col-sm-6">
								<div className="circle-tile ">
									<a href="#"><div className="circle-tile-heading green"><i className="fa fa-smile-o fa-fw fa-3x"></i></div></a>
									<div className="circle-tile-content green">
										<div className="circle-tile-description text-white">Appointment Complete</div>
										<div className="circle-tile-number" style={{color: '#02fa02'}}>{props.countModel.data.completed_count}</div>
										<a className="circle-tile-footer" href="#">More Info<i className="fa fa-chevron-circle-right" style={{paddingLeft: '7px'}}></i></a>
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