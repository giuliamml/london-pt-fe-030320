import React from 'react'

var today = new Date();  
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 

const TodayDate = () => {

    return (<p>
        {date}
    </p>)
}

export default TodayDate;