import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });
    }

    render() {
		var mobile = this.state.mobile;
        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>


                {/* CHAP 0 - Introduction */}

                        


            <div className="Board__slide Board__slide--middle">
                    <Element name="FOND.png" ></Element>
                </div>
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="15%"></Edito>
            <Element name="1-horloge.png" positionLeft="40%"></Element>
                </div>
            <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="50%"></Edito>
                    
                </div>
        
                {/* CHAP 1 */}
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="partie1-texte.png" bg="partie1.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
                <div className="Board__slide Board__slide--bottom" >
                    <Edito content={this.props.datas.text[1].zone_1}
            positionTop="12%"></Edito>
            <Element name="1-fleche.png" positionLeft="80%" index="m2"></Element>
                   
                </div>
                <div className="Board__slide  Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_2}  positionBottom="42%"></Edito>
                   
                </div>
                
                <div className="Board__slide Board__slide--middle">
                    <Element name="montage1.png" positionLeft="10%"></Element>
                </div>
                
            
            <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_3}></Edito>
                </div>
            
              <div className="Board__slide Board__slide--bottom js-board-doubleslide">
                <Element name="foto2.png"
            positionLeft="-13%"></Element>
                
                <Element name="foto3.png" 
            positionLeft="-13%"></Element>
                </div>
            
          
            
             <div className="Board__slide Board__slide--middle">
                    <Element name="infog1.png" ></Element>
                </div>
           
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[1].zone_4} positionTop="8%">
            </Edito>
            <Element name="foto4.png" positionLeft="-5%"></Element>
            
                </div>
          
            
            <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="13%"></Edito>
                    <Element name="1-applaudissement-.png" index="m1" positionLeft="12%"></Element>
                </div>
            
             <div className="Board__slide Board__slide--large js-board-doubleslide">
                    <Video id="x769i4q" maxHeight="480" ratio="1.77" positionTop="50%"></Video>
                </div>
            
               
            
        
            
               <div className="Board__slide Board__slide--top">
                    <Element name="FOND.png" positionLeft="3%" index="m2"></Element>
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="10%">
              </Edito>
            <Element name="1-applaudissement-2.png" positionLeft="-4%" index="m1"></Element>
                </div>
         
              
            <div className="Board__slide Board__slide--large js-board-doubleslide" >
                    <Video id="x76dyvo" maxHeight="480" ratio="1.77" positionTop="50%"></Video>
               
                </div>               
            
            <div className="Board__slide Board__slide--bottom js-board-doubleslide">
                    
                    <Element name="citation1.png" positionLeft="15%"></Element><Element name="2-vélomontagnes.png" positionLeft="12%" index="p1"></Element>
                </div>
            
                <div className="Board__slide Board__slide--top">
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="25%"></Edito>
            
                </div>
            
              
                {/* CHAP 2 */}
            
            
            

                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="Partie2-texte.png" bg="partie2.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--middle red white board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                </div>
            
                <div className="Board__slide Board__slide--bottom red">
                    <Element name="foto6.png" positionRight="5%"></Element>
                    <Edito content={this.props.datas.text[2].zone_1} positionBottom="17%"></Edito>
                </div>
            
                
            <div className="Board__slide Board__slide--bottom js-board-doubleslide red">
                    
                    <Element name="citation2.png" positionLeft="15%"></Element>
                </div>
            
            
            
            <div className="Board__slide Board__slide--top red">
            <Element name="foto7.png" positionLeft="0%" index="p1"></Element>
                    <Element name="1-Vollley.png" index="m1" positionLeft="-77%"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="12%"></Edito>
                </div>
           
            
            <div className="Board__slide Board__slide--bottom red">
                    <Element name="foto8.png" positionLeft="-5%" ></Element>
            <Element name="foto9.png" positionLeft="-5%" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="15%"></Edito>
                </div>
            
         
            <div className="Board__slide Board__slide--bottom js-board-doubleslide red">
            <Element name="1-calendrier.png" positionLeft="10%" index="m1"></Element>
                <Element name="citation3.png" positionLeft="10%"></Element>
                </div>
            
            <div className="Board__slide Board__slide--bottom red">
                    <Element name="2-collines.png" positionLeft="15%" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_4} positionTop="28%"></Edito>
                </div>
            
            <div className="Board__slide Board__slide--bottom js-board-doubleslide red">
                <Element name="chiffre1.png" positionLeft="0%" ></Element>
            
                </div>
            
            <div className="Board__slide Board__slide--bottom red">
                    <Element name="1-billets.png" positionLeft="-25%"></Element>
                    <Edito content={this.props.datas.text[2].zone_5} positionBottom="7%"></Edito>
                </div>
            
            <div className="Board__slide Board__slide--large js-board-doubleslide red">
                    <Video id="x76y6xf" maxHeight="480" ratio="1.77" positionTop="40%"></Video>
                    
 <Element name="creditstf1.png" positionLeft="3%"></Element>

                </div>
           
            
             <div className="Board__slide Board__slide--bottom red"><Element name="foto11.png" positionLeft="10%" index="p1" ></Element>
                    <Edito content={this.props.datas.text[2].zone_6} positionBottom="60%"></Edito>
                </div>
            
          
            
            <div className="Board__slide Board__slide--bottom js-board-doubleslide red">
                    
                    <Element name="citation4.png" positionLeft="16%"></Element>
                </div>
            
            
                {/* CHAP 3 */}

                <div className="Board__slide red board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="partie3-texte.png" bg="partie3.png"></Skew>
                </div>
                <div className="Board__slide board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
                <div className="Board__slide Board__slide--top blue">
                    <Edito content={this.props.datas.text[3].zone_1} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top blue">
            <Element name="foto22.png" positionLeft="10%"></Element>
                    <Edito content={this.props.datas.text[3].zone_2} positionTop="20%"></Edito>
                </div>
               
                <div className="Board__slide Board__slide--top blue">
                	<Element name="1-poulie.png" positionLeft="20%" index="m1"></Element>
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="57%"></Edito>
                </div>
              
                <div className="Board__slide Board__slide--top blue">
            
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="12%"></Edito>
                </div>
          
                <div className="Board__slide Board__slide--top blue">
             <Element name="citation5.png" positionLeft="15%"></Element>
                	<Element name="1-pasta.png" positionLeft="25%" index="m2"></Element>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="35%"></Edito>
                </div>
           
          
            <div className="Board__slide Board__slide--bottom js-board-doubleslide blue">
                    
                    <Element name="citation6.png" positionLeft="0%"></Element>
            <Element name="foto16.png" positionLeft="17%"></Element>
                </div>
            
            <div className="Board__slide Board__slide--top blue"> 
                	
                    <Edito content={this.props.datas.text[3].zone_7} positionTop="20%"></Edito>
                </div>
              <div className="Board__slide Board__slide--middle red white blue">
            <Element name="2-ligne.png" positionLeft="45%" index="m2"></Element>
                    <Element name="foto17.png" positionLeft="20%"></Element>
                </div>
            
             
            <div className="Board__slide Board__slide--top blue"> 
            <Element name="citation7.png" positionLeft="10%"></Element>
                </div>
            
                

                {/* CHAP04 - Conclusion */}

                <div className="Board__slide board-small-slide blue" style={!mobile ? {minWidth: '55vh'} : {}}>
                    <Skew position="left" name="partie4-texte.png" bg="partie4.png"></Skew>
                </div>
                <div className="Board__slide only_blue board-small-slide" style={!mobile ? {minWidth: '55vh'} : {}}></div>
            
            
            <div className="Board__slide Board__slide--infog1" style={!mobile ? {minWidth: '70vh'} : {}}>
                    <Element name="infog2.png" positionLeft="20%"></Element>
                </div>
            
            <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND.png" index="m1" positionLeft="-20%"></Element>
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="23%"></Edito>
           
                </div>
            
         
            
            <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND.png" index="m1" positionLeft="-20%"></Element>
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="53%"></Edito>
            <Element name="infog4b.png" positionLeft="10%"></Element> 
            <Element name="infog4c.png" positionLeft="18%"></Element>
            <Element name="infog4a.png" positionLeft="14%"></Element>
                </div>
            
                       
                <div className="Board__slide Board__slide--photolarge js-board-doubleslide">
            
                    <Element name="foto19.png" positionLeft="0%"></Element>
                </div>
            
            <div className="Board__slide Board__slide--bottom">
                    <Element name="citation8.png" positionLeft="5%"></Element>
                </div>
            

            <div className="Board__slide Board__slide--photolarge">
                    <Element name="foto20.png" positionLeft="0%"></Element>
                </div>
            
            <div className="Board__slide Board__slide--infog2">
            <Element name="citation9.png" positionLeft="-6%"></Element>
            <Element name="2-planete.png" positionLeft="-5%"></Element>
 <Element name="2-planetec.png" positionLeft="-5%"></Element>
                </div>
            
            
           
           
            
            
            
            <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="foto21.png" positionLeft="10%"></Element>
                    <Edito content={this.props.datas.text[4].zone_5} positionTop="15%"></Edito>
                </div>
            
         
            
            
            <div className="Board__slide Board__slide--top white only_blue">
                   
                    <Edito content={this.props.datas.text[4].zone_6} positionTop="35%"></Edito>
<Element name="1-confettis.png" positionLeft="15%"></Element>
                </div>
            
            
               
                <div className="Board__slide only_blue">
                    <Skew position="left" bg="OURS.png" ></Skew>
                </div>
                <div className="Board__slide only_blue black">
                    <Masthead />
                </div>
            </div>
        )
    }
}

