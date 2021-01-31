import "./declaration.d.ts"
import React from "react"
import temp_image from "./assets/mEngine.jpg";
import './styles.css'

export default class PageManager extends React.Component {
    constructor(props: any) {
        super(props)

        // enum for switching pages. Gives us valid pages to display on this personal website
        enum ServablePages {
            aboutMe ,
            aboutClasses,
            aboutProjects
        }

        this.state = {displayedPage: ServablePages}; // only display one of valid pages

        // bind function handlePageChange (implemented lower) to field defined in the current class "handlePageChange".
        // The similar names makes this a bit confusing.
        this.handlePageChange = this.handlePageChange.bind(this);


    }

    handlePageChange(): void {
        console.log("handled page change")
    }

    renderGeneralSite(): JSX.Element {
        return (
            <div className={"bensthing"}>
                <h1>hellofromsite22</h1>
                {console.log(this.state)}
                <div>
                    <img src={temp_image} alt={"alternative_img"}/>
                </div>
            </div>
        )
    }


    render() {
        return this.renderGeneralSite()
    }
}