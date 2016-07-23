import { connect } from 'react-redux'

import { toggleNavbar } from '../../actions/layoutAction'

import Navbar from '../presentations/Navbar'

const mapStateToProps = (state) => ({
  displayNavbar: state.layout.displayNavbar
})

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => dispatch(toggleNavbar())
})

const Panel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default Panel