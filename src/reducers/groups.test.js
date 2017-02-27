import groups from './groups'

describe('Reducers: groups', () => {

    const initialState = {
        byId: {}
    }

    it('should provide initial state', () => {

        expect(groups(undefined, {})).toEqual(initialState)
    })

    it('should handle FETCH_GROUP_ITEMS_SUCCESS action', () => {

        expect(groups(initialState, {type: 'FETCH_GROUP_ITEMS_SUCCESS', groups: {
            1: {id: 1, name: 'cashiers'},
            2: {id: 2, name: 'storage'}
        }})).toEqual(
            {
                byId: {
                    1: {id: 1, name: 'cashiers'},
                    2: {id: 2, name: 'storage'}
                }
            }
        )
    })
})