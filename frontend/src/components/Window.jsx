import React, { Component } from 'react'
import styled from 'styled-components';
import Mail from './Mail'
import Note from './Note'

export default class Window extends Component{
    constructor(props){
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        }

        this.dragStart = this.dragStart.bind(this);
        this.isDragging = this.isDragging.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }

    dragStart(e){
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }
    isDragging(e){
        if(this.state.dragging){
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;

            this.setState({
                styles:{
                    left: left,
                    top: top
                }
            });
        }
    }
    dragEnd(){
        this.setState({
            dragging: false
        });
    }

    render(){
        return (
            <Container style={this.state.styles}>
                <Header onMouseDown={this.dragStart} onMouseMove={this.isDragging} onMouseUp={this.dragEnd}>
                    <Titolo>{this.props.nome}</Titolo>
                    <Close onClick={this.props.click}/>
                </Header>
                <Main>
                    {this.props.type ? <Mail/> : <Note/>}
                </Main>
            </Container>
        );
    }
}

const Container = styled.div`
    position: absolute;
    height: 550px;
    width: 800px;
    background: #666666;
    border-bottom: solid 5px #222222;
    border-left: solid 5px #222222;
    border-right: solid 5px #222222;
`
const Header = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    background: #222222;
    cursor: move;
`
const Titolo = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 100;
    color: var(--main-txt-color);
`
const Close = styled.div`
    position: absolute;
    top: 7px;
    right: 10px;
    height: 25px;
    width: 25px;
    border: solid 1px #111111;
    border-radius: 50%;
    background: #3b3b3b;
    background-image: url("/icon/close.png");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`
const Main = styled.div`
    width: 100%;
    height: 505px;
`