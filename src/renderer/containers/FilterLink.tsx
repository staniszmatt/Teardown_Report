/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Links';

const mapStateToProps = (state: any, ownProps: any) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
