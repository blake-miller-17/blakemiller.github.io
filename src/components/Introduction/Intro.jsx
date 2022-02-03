import "./intro.css"
import ph from '../../image/BlakeSD.jpeg'

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-i">Hi there, </h2>
                    <h1 className="intro-name">I'm Blake</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>                             
                            <div className="intro-title-item">Game Designer</div>                             
                            <div className="intro-title-item">App Developer</div>                             
                            <div className="intro-title-item">Experimenter</div>                             
                            <div className="intro-title-item">Self Starter</div>                                                         
                        </div>
                    </div>
                    <p className="intro-description">
                        In search of a better future, starting with this website.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg">
                    <img src={ph} alt="" className="intro-img" />
                </div>
            </div>
        </div>
    )
}

export default Intro

