import React from 'react'

const NamesDisplay = props => {
    const mappedNames = props.names.map((name, i) => <li key={name+i}> { name } </li> )
    return (
        <div>
        <h1>{ props.input }</h1>
            <ol>
                { mappedNames }
            </ol>
        </div>
    )
}

export default NamesDisplay;