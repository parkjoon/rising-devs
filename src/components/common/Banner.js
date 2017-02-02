import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<div className="slider-container rev_slider_wrapper" style={{height: '760px'}}>
				<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 760}'>
					<ul>
						<li data-transition="fade">
							<img src="../../styles/img/slides/slide-bg-full-3-dark.jpg"
								alt=""
								data-bgposition="center center"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								className="rev-slidebg" />

							<div className="tp-caption"
								data-x="center" data-hoffset="-150"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: 5}}
								data-transform_in="x:[-300%];opacity:0;s:500;"><img src="../../styles/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption top-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-95"
								data-start="500"
								style={{zIndex: 5}}
								data-transform_in="y:[-300%];opacity:0;s:500;">DO YOU NEED A NEW</div>

							<div className="tp-caption"
								data-x="center" data-hoffset="150"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: 5}}
								data-transform_in="x:[300%];opacity:0;s:500;"><img src="../../styles/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption main-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-45"
								data-start="1500"
								data-whitespace="nowrap"
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;"
								style={{zIndex: 5}}
								data-mask_in="x:0px;y:0px;">WEB DESIGN?</div>

							<div className="tp-caption bottom-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="5"
								data-start="2000"
								style={{zIndex: 5}}
								data-transform_in="y:[100%];opacity:0;s:500;">Check out our options and features.</div>

							<a className="tp-caption btn btn-lg btn-primary btn-slider-action"
								data-hash
								data-hash-offset="85"
								href="#home-intro"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="80"
								data-start="2200"
								data-whitespace="nowrap"
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;"
								style={{zIndex: 5}}
								data-mask_in="x:0px;y:0px;">Get Started Now!</a>

						</li>
						<li data-transition="fade">
							<img src="../../styles/img/slides/slide-bg-full-4-dark.jpg"
								alt=""
								data-bgposition="center center"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								className="rev-slidebg" />

							<div className="tp-caption featured-label"
								data-x="center"
								data-y="center" data-voffset="-45"
								data-start="500"
								style={{zIndex: 5}}
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;">WELCOME TO PORTO</div>

							<div className="tp-caption bottom-label"
								data-x="center"
								data-y="center" data-voffset="5"
								data-start="1000"
								data-transform_idle="o:1;"
								data-transform_in="y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;s:600;e:Power4.easeInOut;"
								data-transform_out="opacity:0;s:500;"
								data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
								data-splitin="chars"
								data-splitout="none"
								data-responsive_offset="on"
								style={{fontSize: '23px', lineHeight: '30px', zIndex: 5}}
								data-elementdelay="0.05">The #1 Selling HTML Site Template on ThemeForest</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
