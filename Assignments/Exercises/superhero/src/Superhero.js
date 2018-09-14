import React from 'react';
import './Superhero.css';

class Superhero extends React.Component {
    constructor() {
        super();
        this.cyborg = this.cyborg.bind(this);
        this.robin = this.robin.bind(this);
        this.beastboy = this.beastboy.bind(this);
        this.raven = this.raven.bind(this);
        this.starfire = this.starfire.bind(this);
    }
    cyborg(e) {
        e.preventDefault();
        alert('This is Cyborg!');
    }
    robin(e) {
        e.preventDefault();
        alert('This is Robin!');
    }
    beastboy(e) {
        e.preventDefault();
        alert('This is Beastboy!');
    }
    raven(e) {
        e.preventDefault();
        alert('This is Raven!');
    }
    starfire(e) {
        e.preventDefault();
        alert('This is Starfire!');
    }
    render() {
    // const superheroNames = ['cyborg', 'robin', 'beastboy', 'raven', 'starfire'];
    // const superhero = superheroNames.map((name, index)) => <Superhero key={name, index} name={name} />);
        return (
            <div className="superheroes">
                <div className='cyborg'> 
                    <button className='firstBtn' onClick={this.cyborg}>Click</button>
                </div>

                <div className='robin'>
                    <button className='secondBtn' onClick={this.robin}>Click</button>
                </div>

                <div className='beastboy'>
                    <button className='thirdBtn' onClick={this.beastboy}>Click</button>
                </div>

                <div className='raven'>
                    <button className='forthBtn' onClick={this.raven}>Click</button>
                </div>

                <div className='starfire'>
                    <button className='fifthBtn' onClick={this.starfire}>Click</button>
                </div>
            </div>
        )
    }
}

export default Superhero;