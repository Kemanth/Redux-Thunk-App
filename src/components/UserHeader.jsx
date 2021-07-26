
import {connect} from 'react-redux'

const UserHeader = ({user}) => {
    if(!user)
        return null;
    else
        return <div>{user.username}</div>
}

const mapStateToProps = (store, ownProps) => {
    return {
        user : store.users.find((user)=>user.id === ownProps.userId),
    }
}

export default connect(mapStateToProps)(UserHeader);