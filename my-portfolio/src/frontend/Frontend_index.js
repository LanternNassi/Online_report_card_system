import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Frontend_index = (props) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
 return {store : state}   
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Frontend_index)