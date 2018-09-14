import React from "react";
import Hero from "./Hero";
import "./Heroes.css";
import { connect } from "react-redux";
import { getHeroes } from '../redux';

class Heroes extends React.Component {
    constructor() {
        super();
        this.state = {
            heroes: []
        }
    }

    componentDidMount = () => {
        this.props.getHeroes( this.state )
    }

    render() {
        const headerMsg = !this.props.player ? "List of Heroes" : "Most Successful Heroes"
        return (
            <div>
                <div className="heroesHeader">
                    <h1 id='heroesHeading' className="heroesHeading">{headerMsg}</h1>
                </div>

                <div className="heroesMain">
                    {this.props.heroes
                    .filter(hero => {
                        if(!this.props.player) return true;
                        const rank = this.props.rankings.find(rank => rank.hero_id === hero.id);
                        if(!rank) return false;
                        hero.rank = rank.percent_rank;
                        return rank;
                    })
                    .sort((a, b) => b.rank - a.rank)
                    .map(hero => {
                        console.log(hero);
                        return <Hero {...hero} />;
                    })}
                </div>
            </div>
        )
    }
}

export default connect(
  state => state,
  { getHeroes }
)(Heroes);
