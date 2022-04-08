const defaultState = {
    pizza1: {
        name: 'Чизбургер-пицца',
        price: 395,
        weight: 450,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza2: {
        name: 'Супер пицца',
        price: 450,
        weight: 470,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza3: {
        name: 'Супер-пупер пицца',
        price: 580,
        weight: 510,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza4: {
        name: 'Гипер пицца',
        price: 700,
        weight: 480,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza5: {
        name: 'Тархун чел',
        price: 228,
        weight: 450,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza6: {
        name: 'Пицца с ебейшей начинкой',
        price: 666,
        weight: 470,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza7: {
        name: 'Пицца для всех',
        price: 555,
        weight: 435,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza8: {
        name: 'Пицца за касарь',
        price: 1000,
        weight: 490,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    },
    pizza9: {
        name: 'Пицца для бомжей',
        price: 100,
        weight: 380,
        taste: 'slim',
        radius: '26',
        count: 0,
        result: 0
    }
};

export const pizzaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'Pizza_Чизбургер-пицца_slim_26cm':
            return {
                ...state,
                pizza1: {
                    price: 395,
                    weight: 450,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_slim_26cm':
            return {
                ...state,
                pizza1: {
                    price: 395,
                    weight: 450,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_slim_26cm':
            return {
                ...state,
                pizza1: {
                    price: 395,
                    weight: 450,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'Pizza_Чизбургер-пицца_slim_30cm':
            return {
                ...state,
                pizza1: {
                    price: 480,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_slim_30cm':
            return {
                ...state,
                pizza1: {
                    price: 480,
                    weight: 590,
                    taste: 'slim',
                    radius: '30',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_slim_30cm':
            return {
                ...state,
                pizza1: {
                    price: 480,
                    weight: 590,
                    taste: 'slim',
                    radius: '30',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'Pizza_Чизбургер-пицца_slim_40cm':
            return {
                ...state,
                pizza1: {
                    price: 635,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_slim_40cm':
            return {
                ...state,
                pizza1: {
                    price: 635,
                    weight: 450,
                    taste: 'slim',
                    radius: '40',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_slim_40cm':
            return {
                ...state,
                pizza1: {
                    price: 635,
                    weight: 450,
                    taste: 'slim',
                    radius: '40',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'Pizza_Чизбургер-пицца_traditional_26cm':
            return {
                ...state,
                pizza1: {
                    price: 415,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_traditional_26cm':
            return {
                ...state,
                pizza1: {
                    price: 415,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_traditional_26cm':
            return {
                ...state,
                pizza1: {
                    price: 415,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'Pizza_Чизбургер-пицца_traditional_30cm':
            return {
                ...state,
                pizza1: {
                    price: 520,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_traditional_30cm':
            return {
                ...state,
                pizza1: {
                    price: 520,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_traditional_30cm':
            return {
                ...state,
                pizza1: {
                    price: 520,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };

        case 'Pizza_Чизбургер-пицца_traditional_40cm':
            return {
                ...state,
                pizza1: {
                    price: 650,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza1.count,
                    result: state.pizza1.result,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'ADD_Pizza_Чизбургер-пицца_traditional_40cm':
            return {
                ...state,
                pizza1: {
                    price: 650,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza1.count + action.payload.count,
                    result:
                        state.pizza1.result + action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'REMOVE_Pizza_Чизбургер-пицца_traditional_40cm':
            return {
                ...state,
                pizza1: {
                    price: 650,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza1.count - action.payload.count,
                    result:
                        state.pizza1.result - action.payload.price,
                    name: 'Чизбургер-пицца'
                }
            };
        case 'Pizza_Супер пицца_slim_26cm':
            return {
                ...state,
                pizza2: {
                    price: 450,
                    weight: 470,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_slim_26cm':
            return {
                ...state,
                pizza2: {
                    price: 450,
                    weight: 470,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_slim_26cm':
            return {
                ...state,
                pizza2: {
                    price: 450,
                    weight: 470,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер пицца_slim_30cm':
            return {
                ...state,
                pizza2: {
                    price: 560,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_slim_30cm':
            return {
                ...state,
                pizza2: {
                    price: 560,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_slim_30cm':
            return {
                ...state,
                pizza2: {
                    price: 560,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер пицца_slim_40cm':
            return {
                ...state,
                pizza2: {
                    price: 680,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_slim_40cm':
            return {
                ...state,
                pizza2: {
                    price: 680,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_slim_40cm':
            return {
                ...state,
                pizza2: {
                    price: 680,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер пицца_traditional_26cm':
            return {
                ...state,
                pizza2: {
                    price: 490,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_traditional_26cm':
            return {
                ...state,
                pizza2: {
                    price: 490,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_traditional_26cm':
            return {
                ...state,
                pizza2: {
                    price: 490,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер пицца_traditional_30cm':
            return {
                ...state,
                pizza2: {
                    price: 590,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_traditional_30cm':
            return {
                ...state,
                pizza2: {
                    price: 590,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_traditional_30cm':
            return {
                ...state,
                pizza2: {
                    price: 590,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер пицца_traditional_40cm':
            return {
                ...state,
                pizza2: {
                    price: 700,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza2.count,
                    result: state.pizza2.result,
                    name: 'Супер пицца'
                }
            };
        case 'ADD_Pizza_Супер пицца_traditional_40cm':
            return {
                ...state,
                pizza2: {
                    price: 700,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza2.count + action.payload.count,
                    result:
                        state.pizza2.result + action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер пицца_traditional_40cm':
            return {
                ...state,
                pizza2: {
                    price: 700,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza2.count - action.payload.count,
                    result:
                        state.pizza2.result - action.payload.price,
                    name: 'Супер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_slim_26cm':
            return {
                ...state,
                pizza3: {
                    price: 580,
                    weight: 510,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_slim_26cm':
            return {
                ...state,
                pizza3: {
                    price: 580,
                    weight: 510,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_slim_26cm':
            return {
                ...state,
                pizza3: {
                    price: 580,
                    weight: 530,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_slim_30cm':
            return {
                ...state,
                pizza3: {
                    price: 690,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_slim_30cm':
            return {
                ...state,
                pizza3: {
                    price: 690,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_slim_30cm':
            return {
                ...state,
                pizza3: {
                    price: 690,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_slim_40cm':
            return {
                ...state,
                pizza3: {
                    price: 870,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_slim_40cm':
            return {
                ...state,
                pizza3: {
                    price: 870,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_slim_40cm':
            return {
                ...state,
                pizza3: {
                    price: 870,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_traditional_26cm':
            return {
                ...state,
                pizza3: {
                    price: 600,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_traditional_26cm':
            return {
                ...state,
                pizza3: {
                    price: 600,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_traditional_26cm':
            return {
                ...state,
                pizza3: {
                    price: 600,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_traditional_30cm':
            return {
                ...state,
                pizza3: {
                    price: 750,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_traditional_30cm':
            return {
                ...state,
                pizza3: {
                    price: 750,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_traditional_30cm':
            return {
                ...state,
                pizza3: {
                    price: 750,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Супер-пупер пицца_traditional_40cm':
            return {
                ...state,
                pizza3: {
                    price: 890,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza3.count,
                    result: state.pizza3.result,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'ADD_Pizza_Супер-пупер пицца_traditional_40cm':
            return {
                ...state,
                pizza3: {
                    price: 890,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza3.count + action.payload.count,
                    result:
                        state.pizza3.result + action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'REMOVE_Pizza_Супер-пупер пицца_traditional_40cm':
            return {
                ...state,
                pizza3: {
                    price: 890,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza3.count - action.payload.count,
                    result:
                        state.pizza3.result - action.payload.price,
                    name: 'Супер-пупер пицца'
                }
            };
        case 'Pizza_Гипер пицца_slim_26cm':
            return {
                ...state,
                pizza4: {
                    price: 700,
                    weight: 480,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_slim_26cm':
            return {
                ...state,
                pizza4: {
                    price: 700,
                    weight: 480,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_slim_26cm':
            return {
                ...state,
                pizza4: {
                    price: 700,
                    weight: 480,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Гипер пицца_slim_30cm':
            return {
                ...state,
                pizza4: {
                    price: 820,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_slim_30cm':
            return {
                ...state,
                pizza4: {
                    price: 820,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_slim_30cm':
            return {
                ...state,
                pizza4: {
                    price: 820,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Гипер пицца_slim_40cm':
            return {
                ...state,
                pizza4: {
                    price: 960,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_slim_40cm':
            return {
                ...state,
                pizza4: {
                    price: 960,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_slim_40cm':
            return {
                ...state,
                pizza4: {
                    price: 960,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Гипер пицца_traditional_26cm':
            return {
                ...state,
                pizza4: {
                    price: 730,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_traditional_26cm':
            return {
                ...state,
                pizza4: {
                    price: 730,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_traditional_26cm':
            return {
                ...state,
                pizza4: {
                    price: 730,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Гипер пицца_traditional_30cm':
            return {
                ...state,
                pizza4: {
                    price: 840,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_traditional_30cm':
            return {
                ...state,
                pizza4: {
                    price: 840,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_traditional_30cm':
            return {
                ...state,
                pizza4: {
                    price: 840,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Гипер пицца_traditional_40cm':
            return {
                ...state,
                pizza4: {
                    price: 990,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza4.count,
                    result: state.pizza4.result,
                    name: 'Гипер пицца'
                }
            };
        case 'ADD_Pizza_Гипер пицца_traditional_40cm':
            return {
                ...state,
                pizza4: {
                    price: 990,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza4.count + action.payload.count,
                    result:
                        state.pizza4.result + action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'REMOVE_Pizza_Гипер пицца_traditional_40cm':
            return {
                ...state,
                pizza4: {
                    price: 990,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza4.count - action.payload.count,
                    result:
                        state.pizza4.result - action.payload.price,
                    name: 'Гипер пицца'
                }
            };
        case 'Pizza_Тархун чел_slim_26cm':
            return {
                ...state,
                pizza5: {
                    price: 228,
                    weight: 450,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_slim_26cm':
            return {
                ...state,
                pizza5: {
                    price: 228,
                    weight: 450,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_slim_26cm':
            return {
                ...state,
                pizza5: {
                    price: 228,
                    weight: 450,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Тархун чел_slim_30cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_slim_30cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_slim_30cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Тархун чел_slim_40cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_slim_40cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_slim_40cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Тархун чел_traditional_26cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_traditional_26cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_traditional_26cm':
            return {
                ...state,
                pizza5: {
                    price: 322,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Тархун чел_traditional_30cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_traditional_30cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_traditional_30cm':
            return {
                ...state,
                pizza5: {
                    price: 555,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Тархун чел_traditional_40cm':
            return {
                ...state,
                pizza5: {
                    price: 1488,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza5.count,
                    result: state.pizza5.result,
                    name: 'Тархун чел'
                }
            };
        case 'ADD_Pizza_Тархун чел_traditional_40cm':
            return {
                ...state,
                pizza5: {
                    price: 1488,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza5.count + action.payload.count,
                    result:
                        state.pizza5.result + action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'REMOVE_Pizza_Тархун чел_traditional_40cm':
            return {
                ...state,
                pizza5: {
                    price: 1488,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza5.count - action.payload.count,
                    result:
                        state.pizza5.result - action.payload.price,
                    name: 'Тархун чел'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_slim_26cm':
            return {
                ...state,
                pizza6: {
                    price: 666,
                    weight: 470,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_slim_26cm':
            return {
                ...state,
                pizza6: {
                    price: 666,
                    weight: 470,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_slim_26cm':
            return {
                ...state,
                pizza6: {
                    price: 666,
                    weight: 470,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_slim_30cm':
            return {
                ...state,
                pizza6: {
                    price: 777,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_slim_30cm':
            return {
                ...state,
                pizza6: {
                    price: 777,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_slim_30cm':
            return {
                ...state,
                pizza6: {
                    price: 777,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_slim_40cm':
            return {
                ...state,
                pizza6: {
                    price: 888,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_slim_40cm':
            return {
                ...state,
                pizza6: {
                    price: 888,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_slim_40cm':
            return {
                ...state,
                pizza6: {
                    price: 888,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_traditional_26cm':
            return {
                ...state,
                pizza6: {
                    price: 678,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_traditional_26cm':
            return {
                ...state,
                pizza6: {
                    price: 678,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_traditional_26cm':
            return {
                ...state,
                pizza6: {
                    price: 678,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_traditional_30cm':
            return {
                ...state,
                pizza6: {
                    price: 789,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_traditional_30cm':
            return {
                ...state,
                pizza6: {
                    price: 789,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_traditional_30cm':
            return {
                ...state,
                pizza6: {
                    price: 789,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца с ебейшей начинкой_traditional_40cm':
            return {
                ...state,
                pizza6: {
                    price: 980,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza6.count,
                    result: state.pizza6.result,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'ADD_Pizza_Пицца с ебейшей начинкой_traditional_40cm':
            return {
                ...state,
                pizza6: {
                    price: 980,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza6.count + action.payload.count,
                    result:
                        state.pizza6.result + action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'REMOVE_Pizza_Пицца с ебейшей начинкой_traditional_40cm':
            return {
                ...state,
                pizza6: {
                    price: 980,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza6.count - action.payload.count,
                    result:
                        state.pizza6.result - action.payload.price,
                    name: 'Пицца с ебейшей начинкой'
                }
            };
        case 'Pizza_Пицца для всех_slim_26cm':
            return {
                ...state,
                pizza7: {
                    price: 555,
                    weight: 435,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_slim_26cm':
            return {
                ...state,
                pizza7: {
                    price: 555,
                    weight: 435,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_slim_26cm':
            return {
                ...state,
                pizza7: {
                    price: 555,
                    weight: 435,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца для всех_slim_30cm':
            return {
                ...state,
                pizza7: {
                    price: 666,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_slim_30cm':
            return {
                ...state,
                pizza7: {
                    price: 666,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_slim_30cm':
            return {
                ...state,
                pizza7: {
                    price: 666,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца для всех_slim_40cm':
            return {
                ...state,
                pizza7: {
                    price: 777,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_slim_40cm':
            return {
                ...state,
                pizza7: {
                    price: 777,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_slim_40cm':
            return {
                ...state,
                pizza7: {
                    price: 777,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца для всех_traditional_26cm':
            return {
                ...state,
                pizza7: {
                    price: 566,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_traditional_26cm':
            return {
                ...state,
                pizza7: {
                    price: 566,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_traditional_26cm':
            return {
                ...state,
                pizza7: {
                    price: 566,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца для всех_traditional_30cm':
            return {
                ...state,
                pizza7: {
                    price: 655,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_traditional_30cm':
            return {
                ...state,
                pizza7: {
                    price: 655,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_traditional_30cm':
            return {
                ...state,
                pizza7: {
                    price: 655,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца для всех_traditional_40cm':
            return {
                ...state,
                pizza7: {
                    price: 765,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza7.count,
                    result: state.pizza7.result,
                    name: 'Пицца для всех'
                }
            };
        case 'ADD_Pizza_Пицца для всех_traditional_40cm':
            return {
                ...state,
                pizza7: {
                    price: 765,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza7.count + action.payload.count,
                    result:
                        state.pizza7.result + action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'REMOVE_Pizza_Пицца для всех_traditional_40cm':
            return {
                ...state,
                pizza7: {
                    price: 765,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza7.count - action.payload.count,
                    result:
                        state.pizza7.result - action.payload.price,
                    name: 'Пицца для всех'
                }
            };
        case 'Pizza_Пицца за касарь_slim_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1000,
                    weight: 490,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_slim_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1000,
                    weight: 490,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_slim_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1000,
                    weight: 490,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца за касарь_slim_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1100,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_slim_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1100,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_slim_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1100,
                    weight: 590,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца за касарь_slim_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1200,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_slim_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1200,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_slim_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1200,
                    weight: 720,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца за касарь_traditional_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1001,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_traditional_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1001,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_traditional_26cm':
            return {
                ...state,
                pizza8: {
                    price: 1001,
                    weight: 530,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца за касарь_traditional_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1101,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_traditional_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1101,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_traditional_30cm':
            return {
                ...state,
                pizza8: {
                    price: 1101,
                    weight: 660,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца за касарь_traditional_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1201,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza8.count,
                    result: state.pizza8.result,
                    name: 'Пицца за касарь'
                }
            };
        case 'ADD_Pizza_Пицца за касарь_traditional_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1201,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza8.count + action.payload.count,
                    result:
                        state.pizza8.result + action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'REMOVE_Pizza_Пицца за касарь_traditional_40cm':
            return {
                ...state,
                pizza8: {
                    price: 1201,
                    weight: 800,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza8.count - action.payload.count,
                    result:
                        state.pizza8.result - action.payload.price,
                    name: 'Пицца за касарь'
                }
            };
        case 'Pizza_Пицца для бомжей_slim_26cm':
            return {
                ...state,
                pizza9: {
                    price: 100,
                    weight: 380,
                    taste: 'slim',
                    radius: '26',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_slim_26cm':
            return {
                ...state,
                pizza9: {
                    price: 100,
                    weight: 380,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_slim_26cm':
            return {
                ...state,
                pizza9: {
                    price: 100,
                    weight: 380,
                    radius: '26',
                    taste: 'slim',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'Pizza_Пицца для бомжей_slim_30cm':
            return {
                ...state,
                pizza9: {
                    price: 200,
                    weight: 480,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_slim_30cm':
            return {
                ...state,
                pizza9: {
                    price: 200,
                    weight: 480,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_slim_30cm':
            return {
                ...state,
                pizza9: {
                    price: 200,
                    weight: 480,
                    radius: '30',
                    taste: 'slim',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'Pizza_Пицца для бомжей_slim_40cm':
            return {
                ...state,
                pizza9: {
                    price: 300,
                    weight: 550,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_slim_40cm':
            return {
                ...state,
                pizza9: {
                    price: 300,
                    weight: 550,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_slim_40cm':
            return {
                ...state,
                pizza9: {
                    price: 300,
                    weight: 550,
                    radius: '40',
                    taste: 'slim',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'Pizza_Пицца для бомжей_traditional_26cm':
            return {
                ...state,
                pizza9: {
                    price: 105,
                    weight: 400,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_traditional_26cm':
            return {
                ...state,
                pizza9: {
                    price: 105,
                    weight: 400,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_traditional_26cm':
            return {
                ...state,
                pizza9: {
                    price: 105,
                    weight: 400,
                    radius: '26',
                    taste: 'traditional',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'Pizza_Пицца для бомжей_traditional_30cm':
            return {
                ...state,
                pizza9: {
                    price: 205,
                    weight: 480,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_traditional_30cm':
            return {
                ...state,
                pizza9: {
                    price: 205,
                    weight: 480,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_traditional_30cm':
            return {
                ...state,
                pizza9: {
                    price: 205,
                    weight: 480,
                    radius: '30',
                    taste: 'traditional',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'Pizza_Пицца для бомжей_traditional_40cm':
            return {
                ...state,
                pizza9: {
                    price: 305,
                    weight: 570,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza9.count,
                    result: state.pizza9.result,
                    name: 'Пицца для бомжей'
                }
            };
        case 'ADD_Pizza_Пицца для бомжей_traditional_40cm':
            return {
                ...state,
                pizza9: {
                    price: 305,
                    weight: 570,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza9.count + action.payload.count,
                    result:
                        state.pizza9.result + action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case 'REMOVE_Pizza_Пицца для бомжей_traditional_40cm':
            return {
                ...state,
                pizza9: {
                    price: 305,
                    weight: 570,
                    radius: '40',
                    taste: 'traditional',
                    count: state.pizza9.count - action.payload.count,
                    result:
                        state.pizza9.result - action.payload.price,
                    name: 'Пицца для бомжей'
                }
            };
        case `REMOVE_ALL_PIZZAS`:
            return defaultState;

        default:
            return state;
    }
};
