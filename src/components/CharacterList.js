import React from 'react';
import {connect} from "react-redux";

class CharacterList extends React.Component {
    
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                <aside>
                    <h1>Breaking Bad Characters</h1>
                    <div>
                        {/* Breaking Bad Characters Here */}
                    </div>
                </aside>
                <aside>
                    <h1>Star Wars Characters</h1>
                    <div>
                        {/* Star Wars Characters Here */}
                        {this.props.loading === true ? 
                        <h1>Loading...</h1>
                        :
                        this.props.characters.map(val => {
                            return <h1>Name = {val.name}</h1>
                        })}
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
        return {
            characters: reduxState.starWarsReducer.characters,
            loading: reduxState.starWarsReducer.loading
        }
}


export default connect(mapStateToProps)(CharacterList);