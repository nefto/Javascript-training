export const createInputElement = (elementType, elementConfig, initialValue) => {
    return {
        elementType: elementType,
        elementConfig: elementConfig,
        value: initialValue
    }
}