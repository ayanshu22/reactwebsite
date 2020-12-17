import React from 'react';

import Card from '../components/Card';

import Quote1 from '../assets/images/Quote1.png';
import Quote2 from '../assets/images/Quote2.png';
import Quote3 from '../assets/images/Quote3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Work',
                    imgSrc: Quote1,
                    selected: false
                },
                {
                    id: 1,
                    title: 'learn',
                    imgSrc: Quote2,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Spread',
                    imgSrc: Quote3,
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

 
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}
export default Carousel;
