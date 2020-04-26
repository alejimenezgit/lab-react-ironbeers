import React from 'react';
import "./styles.css";
import ItemHomePage from '../ItemHomePage';

const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting is bendustry. Lorem Ipsum haen the industrys standard dummy text.';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <ItemHomePage img='../images/beers.png'  title='All Beers' description={description} />
                <ItemHomePage img='../images/random-beer.png'  title='Random Beer' description={description} />
                <ItemHomePage img='../images/new-beer.png'  title='New Beer' description={description} />
            </div>
        )
    }
}

export default HomePage;