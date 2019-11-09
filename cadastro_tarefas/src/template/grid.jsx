import React, { Component } from 'react'

export default class Grid extends Component {

    //Método para trabalhar com grid do Bootstrap
    //Exmplo: celular,tablet,dispositivo médios, e dispositivo maiores
    //Exemplo 1: toCssClass('12 6 3 1') =  cols-xs-12 cols-sm-6 cols-md-3 cols-lg-1
    toCssClass(numbers) {
        const cols = numbers ? numbers.split(' ') : []

        let classes = ''

        if (cols[0])
            classes += `col-xs-${cols[0]}`
        if (cols[1])
            classes += `col-sm-${cols[1]}`
        if (cols[2])
            classes += `col-md-${cols[2]}`
        if (cols[3])
            classes += `col-lg-${cols[3]}`

        return classes

    }


    render(){
        const gridClasses = this.toCssClass(this.props.cols || 12)
        
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}