import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <h2  style={{textAlign:"center"}}><img style={{width:'100%', height:'auto',justifyContent:'center'}} src='../../public/valobrain-banner.jpg' alt="youtube logo"></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Busca el clip</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;