import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {
}

export default class About extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div><h1>hello from About</h1></div>
    }
}