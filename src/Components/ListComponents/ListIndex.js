/**
 * Created by kingsae1004@gmail.com on 2018. 9. 17.
 * Github : https://github.com/kingsae1
 */
import {connect} from "react-redux";
import ListComp from "./ListComp";
import {bindActionCreators} from "redux";
import * as actions from "../../Actions/Action";

const mapStateToProps = (state, action) => {
    const {list} = state.todos;
    return {
        list
    };
};

const mapDispatchProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchProps)(ListComp);
