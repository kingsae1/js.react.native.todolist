/**
 * Created by kingsae1004@gmail.com on 2018. 9. 17.
 * Github : https://github.com/kingsae1
 */
import InputComp from './InputComp';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from '../../Actions/Action';

const mapStateToProps = (state, action) => {
    const {isPicker, isOption, isToggle, list} = state.todos;
    return {
        isPicker,
        isOption,
        isToggle,
        list
    };
};

const mapDispatchProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchProps)(InputComp);
