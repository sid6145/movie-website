import React from 'react'
import {TextField} from '@material-ui/core'

function Searchbox (props){
    console.log(props)
    return (
        <div className="search">
                <h1>Search</h1>
               <TextField id="filled-basic" value={props.searchValue} onChange={(e) => props.setSearch(e.target.value)} label="Search" variant="outlined" fullWidth="true" color="primary"/>
        </div>
 
    )
}

export default Searchbox