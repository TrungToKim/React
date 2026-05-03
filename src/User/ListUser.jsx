import React from "react"
import axios from 'axios'

class ListUser extends React.Component {

    state = {
        ListArr: [],
    }

    async GetUser() {
        let res = await axios.get('')
        this.setState({
            ListArr: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('check >>>> ', res.data.data)
    }

    render() {
        let { ListArr } = this.state
        return (
            <>
                {ListArr && ListArr.length > 0 &&
                    ListArr.map((item, index) =>
                        <div key={item.id}>
                            {index + 1}
                        </div>
                    )
                }
            </>
        )
    }
}

export default ListUser