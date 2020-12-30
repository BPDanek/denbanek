import * as React from 'react';
import './styles.css';

//images
import image_of_me_headshot from '../../assets/images/IMG_6700.jpeg';
import github_logo from '../../assets/images/github_logo.jpeg';
import twitter_logo from '../../assets/images/twitter_logo.jpeg';
import linkedin_logo from '../../assets/images/linkedin_logo.jpeg';

//content that is imported from a json
import * as data_asset from '../../assets/Me-Data/data.json';
import MeData from '../../assets/Me-Data/data_type_interface';

interface Props {};
interface State {};

const text_data: MeData = data_asset;

export default class MeController extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"me-page-flexbox-wrapper"}>
                <div className={"me-bio-column"}>
                    <div>
                        <img className={"me-bio-column-image"} src={image_of_me_headshot} alt={"photo of me on the pacific coast"} />
                    </div>
                    <div className={"me-bio-column-bio"}>
                        <p>Creator, student, scholar, engineer.</p>
                        <p>Seeking Full-stack, Front-end, Machine Learning, Research early career engineering roles</p>
                        <div className={"me-bio-column-links"}>
                          <div>
                            <a href={"https://github.com/BPDanek"}>
                                <img className={"Github-link"} src={github_logo} />
                            </a>
                          </div>
                          <div>
                            <a href={"https://www.linkedin.com/in/benjaminpdanek/"}>
                                <img className={"LinkedIn-link"} src={linkedin_logo} />
                            </a>
                          </div>
                          <div>
                            <a href={"https://twitter.com/Benjamindanek"}>
                                <img className={"Twitter-link"} src={twitter_logo} />
                            </a>
                          </div>
                        </div>
                    </div>
                    <div className={"me-navigator-for-content-column"}>
                        <a href={"#about"}>
                            <h4>About</h4>
                        </a>
                        <a href={"#courses"}>
                            <h4>Courses</h4>
                        </a>
                        <a href={"#goals"}>
                            <h4>Goals</h4>
                        </a>
                    </div>
                </div>
                <div className={"me-content-column"}>
                    <div id={"about"}>
                        <h2>About</h2>
                        <p>{text_data.about_section}</p>
                    </div>
                    <div id={"courses"}>
                        <h2>Courses</h2>
                        <div>
                            {text_data.courses_section.map((course_data: []) => {
                                return (
                                    <div>
                                        <h3>{course_data[0]}</h3>
                                        <p>{course_data[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div id={"goals"}>
                        <h2>Goals</h2>
                        <div>
                            {text_data.goals_section.map((goal_data: []) => {
                                return (
                                    <div>
                                        <h3>{goal_data[0]}</h3>
                                        <p>{goal_data[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}