import React from "react"

// export function _pagination(target){
//     console.log(target)
// }

export const _pagination = () => (WrappedComponent) => {
    return class extends React.Component {
       render() {
        this.props.pagination.showTotal = (total, range) => `${range[0]}-${range[1]}条 共 ${total} 条`;
		this.props.pagination.showSizeChanger = true;
		this.props.pagination.pageSizeOptions = ["10","20","50","100","200"]

          return <WrappedComponent {...this.props} />
       }
    }
}
