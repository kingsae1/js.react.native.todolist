import {CONST} from './ActionType';

// Action은 Store의 State를 변경하여 Reducer에게 전달

export const optionChange = (value) => {
    return {
        type: CONST.OPTION,
        value
    }
};

export const toggleChange = (value) => {
    return {
        type: CONST.TOGGLE,
        value
    }
};

export const addTodo = (content) => {
    return {
        type: CONST.ADD_TODO,
        content
    }
};

export const removeTodo = (index) => {
    return {
        type: CONST.REMOVE_TODO,
        index
    }
};
