import {CONST} from '../Actions/ActionType';
import {ACTION} from '../Actions/Action';

const initialState = {
    isPicker: false,
    isOption: false,
    isToggle: false,
    sepToday: false,
    sepFuture: false,
    sepComplete : false,
    list: [
    ]
};

const funcAddTodo = (state, action) => {
    let tempList = state.list;

    if (!action.content.text) {
        // 텍스트 입력이 없으면 State 리턴
        return state;
    }

    if (!initialState.sepToday && action.content.dueDate) {
        tempList = tempList.concat({
            id: 'Today',
            text: '오늘 해야할 일'
        });
        initialState.sepToday = true;
    } else if (!initialState.sepFuture) {
        tempList = tempList.concat({
            id: 'Future',
            text: '해야할 일'
        });
        initialState.sepFuture = true;
    } else if (!initialState.sepComplete && action.content.complete) {
        tempList = tempList.concat({
            id: 'Complete',
            text: '완료'
        });
        initialState.sepComplete = true;
    }

    if (action.content.dueDate && state.isToggle) {
        const date = new Date(action.content.dueDate);
        action.content.dueDate = date.getFullYear() + '년 ' + date.getMonth() + '월 ' + date.getDate() + '일';
    } else {
        action.content.dueDate = '';
    }

    return {
        ...state,
        list: tempList.concat(action.content)
    }
};

const funcRemoveTodo = (state, action) => {

};

const funcChangeOption = (state, action) => {
    return {
        ...state,
        isOption: action.value
    }
};

const funcChangeToggle = (state, action) => {
    return {
        ...state,
        isToggle: action.value
    }
};

export default stateList = (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_TODO :
            return funcAddTodo(state, action);

        case CONST.REMOVE_TODO:
            return funcRemoveTodo(state, action);

        case CONST.OPTION:
            return funcChangeOption(state, action);

        case CONST.TOGGLE:
            return funcChangeToggle(state, action);

        default :
            return state;
    }
};
