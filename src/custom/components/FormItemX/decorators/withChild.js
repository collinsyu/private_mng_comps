import React from "react"

const ishide = () => (WrappedComponent) => {
    return class extends React.PureComponent {
        render() {
            const { children } = this.props;
            
            // if(children){
            //     return children
            // }
            return <WrappedComponent {...this.props} />
        }
    }
}
export default ishide;